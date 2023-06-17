import { ChangeEvent } from 'react';
import { useCallback } from 'react';
import { useDrop } from 'react-dnd';
import { Handle, Position } from 'reactflow';
import { BlocElement } from '../ui/BlocElement';
import { useContainer } from '../../states/bloc.state';
import { BLOC_TO_ELEMENT } from '../../constant/bloc_to_element';
const canevasStyle: React.CSSProperties = {
  width: 300,
  height: 500,
  backgroundColor: '#fff',
  border: '1px solid #aeaeae',
};


export const Canevas = ({ data }: { data: unknown }) => {
  // Container Initialization
  const { parent_bloc, container } = useContainer();



  return (
    <>
      {/* <Handle type="target" position={Position.Top} /> */}
      <div style={canevasStyle} >
        <BlocElement  bloc={parent_bloc} />
      </div>
      {/* <Handle type="source" position={Position.Bottom} id="a" /> */}
    </>
  );
}