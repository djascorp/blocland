import React from "react";
import { BlocElement, PropsBloc } from "./BlocElement";
import { IBloc } from "../../../core/domain/entities/ibloc";

export const BlocHorizontalElement = (props: PropsBloc) => {
    const { bloc } = props;
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "#f2aeae",
        }}>
            <h5>{bloc.id}</h5>
            {bloc.children?.map(child => <BlocElement key={child.id} bloc={child as IBloc} />)}
        </div>
    )
}