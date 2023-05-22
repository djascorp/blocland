import React, { useEffect, useState } from "react";
import { PropsBloc } from "./BlocElement";
import { BlocText } from "../../../core/domain/entities/BlocText";


export const BlocTextElement = (props: PropsBloc) => {
    const { bloc }  = props;

    return (
        <div>
            { (bloc as BlocText).property.text }
        </div>
    )
}