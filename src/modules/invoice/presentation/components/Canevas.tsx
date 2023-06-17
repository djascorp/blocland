import { ChangeEvent } from 'react';
import { useCallback } from 'react';
import { useDrop } from 'react-dnd';
import { Handle, Position } from 'reactflow';
const canevasStyle: React.CSSProperties = {
    width: 300,
    height: 500,
    backgroundColor: '#fff',
    border: '1px solid #aeaeae',
};


export const Canevas = ({ data }: {data: unknown}) => {
  const onChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    console.log(evt.target.value);
  }, []);

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'LAYOUT',
    drop: () => ({ name: 'Dustbin' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div style={canevasStyle} ref={drop}>
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </>
  );
}