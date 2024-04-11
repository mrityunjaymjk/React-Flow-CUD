// import  { Edge, EdgeTypes } from "reactflow";

import CustomEdge from "./customEdge";

export const initialEdges = [
  { id: "a->c", source: "a", target: "c", animated: true },
  { id: "b->d", source: "b", target: "d" },
  { id: "c->d", source: "c", target: "d", animated: true },
] ;

export const edgeTypes = {
  "custom": CustomEdge,
  // Add your custom edge types here!
};
