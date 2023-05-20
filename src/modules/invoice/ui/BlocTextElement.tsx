import React, { useState } from "react";
import { PropsBloc } from "./BlocElement";


export const BlocTextElement = (props: PropsBloc) => {
    const { bloc } = props;
    const { text } = bloc.property as unknown as  { text : string};
    const [text_value] = useState(text);
    return (
        <div>
            { text_value}
        </div>
    )
}