import React from "react";
import { Handle, Position } from "reactflow";

export function PositionLoggerNode({ xPos, yPos, data }) {
  const handleDelete = () => {
    data.onDelete(data.label); // Call the onDelete function with the node id
  };

  return (
    // We add this class to use the same styles as React Flow's default nodes.
    <div className="react-flow__node-default">
      {data.label && <div>{data.label}</div>}

      {/* <div>
        {x} {y}
      </div> */}
      <span
        onClick={handleDelete}
        style={{
          position: "relative",
          right: "-86px",
          color: "red",
          top: "-10px",
          display: "inline-block",
          cursor: "pointer",
          width: "19px",
          fontWeight: "600",
          height: "17px",
          background: "#eee",
          border: "1px solid #fff",
          borderRadius: "50%",
          fontSize: "12px",
          lineHeight: "1",
        }}
      >
        x
      </span>

      <Handle type="source" position={Position.Bottom} />
      <Handle type="target" position={Position.Top} />
    </div>
  );
}
