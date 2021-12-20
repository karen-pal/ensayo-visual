import React from 'react';
import ReactFlow, { addEdge, Handle } from 'react-flow-renderer';
import {n, other} from './nodes.js';


const elements = [
  { id: '1', data: { label: 'Cuerpos' }, position: { x: 250, y: 5 } },
  // you can also pass a React component as a label
  { id: '2', data: { label: <div>Experiencias sensoriales</div> }, position: { x: 100, y: 100 } },
  { id: 'e1-2', source: '1', target: '2', animated: true },
];
const CustomNode = ({ id }) => (
  <>
    <Handle type="target" position="left"  />
    <div >{id}</div>
    <Handle type="source" position="right"  />
  </>
);
const nodeTypes = {customnode:CustomNode}

const BasicFlow = () => <ReactFlow elements={other} nodeTypes={nodeTypes} />;


export default BasicFlow;
