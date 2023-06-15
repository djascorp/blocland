import React from 'react';
import ReactFlow, { Background, BackgroundVariant } from 'reactflow';

import 'reactflow/dist/style.css';
import { Canevas } from './Canevas';

const initialNodes = [
  { id: '1', position: { x: 10, y: 5 }, data: { label: 'Ceci est un Label' }, type: 'canevas' },
];
const nodeTypes = {
  canevas: Canevas
}


export default function FlowBoard() {
  return (
    <div style={{ flex: 1 , height: '100%'}}>
      <ReactFlow nodes={initialNodes} nodeTypes={nodeTypes} >
          <Background id='BG-1' gap={50} variant={BackgroundVariant.Cross} />
      </ReactFlow>
    </div>
  );
}