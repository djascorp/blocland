import React from 'react'
import { IBloc } from '../../../core/domain/entities/ibloc'
import { BLOC_TO_ELEMENT } from '../../constant/bloc_to_element'
import { useDrop } from 'react-dnd'
import { useContainer } from '../../states/bloc.state'
import { PropsBloc } from '../../types/element'



export const BlocElement = (props: PropsBloc) => {
    const { bloc, ...rest } = props;

    if(!BLOC_TO_ELEMENT.has(bloc.type)){
        throw `THE BLOC  ${bloc} WAS NOT REGISTERED!`;
    }

    const Component = BLOC_TO_ELEMENT.get(bloc.type) as React.FC<PropsBloc>;
    const {container} = useContainer();

    // Gerer le drag des components
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: 'LAYOUT',
        drop: (item,monitor) => {
            console.log("DROP",bloc, item);
            if(monitor.didDrop()){
              return;  
            }
            return { target: 'CANEVAS', container, parent: bloc };
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }))

    return (
        // <>
        //     {React.createElement(component, {
        //         bloc: bloc,
        //         reference: drop,
        //         className: className,
        //     })}
        // </>
        <Component bloc={bloc} reference={drop} {...rest} />
    )
}