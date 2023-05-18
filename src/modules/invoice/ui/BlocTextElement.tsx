import React from "react";
import { PropsBloc } from "./BlocElement";

export const BlocTextElement = (props: PropsBloc) => {
    const { bloc } = props;
    return (
        <div>
            {bloc.data as unknown as string}
        </div>
    )
}