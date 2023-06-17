import { useDrag } from "react-dnd";

export interface ElementITemProps {
    icon: string,
    name: string,
    type: string,
}

export const ElementItem = ({element}: {element: ElementITemProps}) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: element.type,
        item: { name: element.name },
        end: (item, monitor) => {
        //   const dropResult = monitor.getDropResult<DropResult>()
        //   if (item && dropResult) {
        //     alert(`You dropped ${item.name} into ${dropResult.name}!`)
        //   }
        },
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
          handlerId: monitor.getHandlerId(),
        }),
      }));

    return (
        <div ref={drag} style={{padding: 8, backgroundColor: '#F4F3F3', cursor: 'grab',userSelect: 'none'}}>
            <div style={{
                width: '50px',
                height: '50px',
            }}></div>
            <div style={{fontWeight: 'bold'}}>
                {element.name}
            </div>
        </div>
    )
}