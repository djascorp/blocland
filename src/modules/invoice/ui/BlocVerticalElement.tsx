import React from "react";
import { BlocElement, PropsBloc } from "./BlocElement";
import { IBloc } from "../../core/domain/entities/ibloc";

export const BlocVerticalElement = (props: PropsBloc) => {
    const { bloc } = props;
    return (
        <p>
            {bloc.children?.map(child => <BlocElement bloc={child as IBloc} />)}
        </p>
    )
}