import { useDrag } from "react-dnd";
import { Container } from "../../../../core/domain/services/container";
import { Factory } from "../../../../core/domain/factories/factory";
import { DropResult, ElementITemProps } from "../../../types/element";



export const ElementItem = ({element}: {element: ElementITemProps}) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: element.type,
        item: element,
        end: (item, monitor) => {
          const dropResult = monitor.getDropResult<DropResult>()
          dropResult?.container.addChild(dropResult.container.rootBloc,item.factory?.make()!)
          console.log(dropResult);
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