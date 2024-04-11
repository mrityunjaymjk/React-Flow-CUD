import React from "react";
import {
  BaseEdge,
  EdgeLabelRenderer,
  getBezierPath,
  useReactFlow,
} from "reactflow";

const CustomEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}) => {
  const { setEdges } = useReactFlow();
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const onEdgeClick = () => {
    setEdges((edges) => edges.filter((edge) => edge.id !== id));
  };

  return (
    <>
      <BaseEdge path={edgePath} markerEnd={markerEnd} style={style} />
      <EdgeLabelRenderer>
        <div
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            fontSize: "12",
            pointerEvents: "all",
          }}
          className="nodrag nopan"
        >
          <button
            className="edgebutton"
            style={{
              width: "20px",
              height: "20px",
              background: "#eee",
              border: "1px solid #fff",
              cursor: "pointer",
              borderRadius: "50%",
              fontSize: "12px",
              lineHeight: "1",
            }}
            onClick={onEdgeClick}
          >
            ×
          </button>
        </div>
      </EdgeLabelRenderer>
    </>
  );
};

export default CustomEdge;
