import React from "react";
import { BlocElement } from "./BlocElement";
import { IBloc } from "../../../core/domain/entities/ibloc";
import { PropsBloc } from "../../types/element";

export const BlocAbsoluteElement = (props: PropsBloc) => {
    const { bloc, reference } = props;
    return (
        <div ref={reference} style={{
            position: 'relative',
            border: "0.5px solid blue",
            }}>
                &nbsp;
            {bloc.children?.map(child => <BlocElement key={child.id} bloc={child as IBloc} className='child-aboslute' />)}
        </div>
    )
}