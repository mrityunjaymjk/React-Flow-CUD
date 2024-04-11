import { useCallback, useState } from "react";


import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  addEdge,
  useNodesState,
  useEdgesState,
} from "reactflow";

import "reactflow/dist/style.css";

import { initialNodes, nodeTypes } from "./nodes";
import { initialEdges, edgeTypes } from "./edges";


export default function App() {
  const [state, setState] = useState(0)
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (connection) => {
      const edge = { ...connection, type: 'custom' }
      setEdges((edges) => addEdge(edge, edges))
    },
    [setEdges]
  );
  const onAdd = useCallback(() => {
    const newNode = { id: `${state}`, type: 'position-logger', data: { label: `${state}` , onDelete : deleteNode }, position: { x: 100, y: 100 } }
    setNodes((nds) => nds.concat(newNode));
    setState((prev) => prev + 1)
  }, [nodes, setNodes]);


  const deleteNode = (id) => {
    setNodes((elements) => elements.filter((element) => element.id !==id));
  };

  const handleEdgeDelete = (id) => {
    console.log('Deleting edge:', id);
    // Implement logic to delete the edge with the given id
  };

  


  return (
    <div style={{ height: 700 }}>
      <button style={{
        width: "110px",
        height: "35px",
        borderRadius: "10px",
        background: "#0075ff",
        color: "#fff",
        fontSize: "medium",
        fontWeight: "600",
        margin: "10px 37px",
        cursor: "pointer",
      }}
        onClick={onAdd}
      >Create Node</button>
      <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        edges={edges}
        edgeTypes={edgeTypes}
        onEdgesDelete = {handleEdgeDelete}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background />
        <MiniMap />
        <Controls />
      </ReactFlow>
    </div>
  );
}
