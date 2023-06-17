import React from "react";
import { BlocElement, PropsBloc } from "./BlocElement";
import { IBloc } from "../../../core/domain/entities/ibloc";

export const BlocVerticalElement = (props: PropsBloc) => {
    const { bloc } = props;
    return (
        <div style={{
            display: 'flex', 
            flexDirection: 'column',
            border: "1px solid black",
            }}>
                <h5>{bloc.id}</h5>
            {bloc.children?.map(child => <BlocElement key={child.id} bloc={child as IBloc} />)}
        </div>
    )
}