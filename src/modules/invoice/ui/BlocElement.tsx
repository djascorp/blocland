import React from 'react'
import { IBloc } from '../../core/domain/entities/ibloc'
import { BLOC_TO_ELEMENT } from '../constant/bloc_to_element'

export interface PropsBloc  {
    bloc: IBloc
}

export const BlocElement = (props: PropsBloc) => {
    const { bloc } = props;
    const component = BLOC_TO_ELEMENT.get(bloc.type) as React.FC<PropsBloc>;
    return (
        <>
           {React.createElement(component,{
            bloc: bloc
           })}
        </>
    )
}