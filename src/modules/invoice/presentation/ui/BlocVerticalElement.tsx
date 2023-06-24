import React from "react";
import { BlocElement } from "./BlocElement";
import { IBloc } from "../../../core/domain/entities/ibloc";
import { PropsBloc } from "../../types/element";

export const BlocVerticalElement = (props: PropsBloc) => {
    const { bloc, reference } = props;
    return (
        <div ref={reference} style={{
            display: 'grid',
            gridAutoColumns: '1fr',
            border: "0.5px solid red",
            }}>
                &nbsp;
            {bloc.children?.map(child => <BlocElement key={child.id} bloc={child as IBloc} />)}
        </div>
    )
}