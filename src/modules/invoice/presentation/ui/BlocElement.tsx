import React from 'react'
import { IBloc } from '../../../core/domain/entities/ibloc'
import { BLOC_TO_ELEMENT } from '../../constant/bloc_to_element'
import { useDrop } from 'react-dnd'

export interface PropsBloc {
    bloc: IBloc
}

export const BlocElement = (props: PropsBloc) => {
    const { bloc } = props;
    const component = BLOC_TO_ELEMENT.get(bloc.type) as React.FC<PropsBloc>;

    // Gerer le drag des components
    // const [{ canDrop, isOver }, drop] = useDrop(() => ({
    //     accept: 'LAYOUT',
    //     drop: (item) => {
    //         console.log("DROP FROM CONTAINER", item);
    //         return { target: 'CANEVAS', container };
    //     },
    //     collect: (monitor) => ({
    //         isOver: monitor.isOver(),
    //         canDrop: monitor.canDrop(),
    //     }),
    // }))

    return (
        <>
            {React.createElement(component, {
                bloc: bloc,
            })}
        </>
    )
}