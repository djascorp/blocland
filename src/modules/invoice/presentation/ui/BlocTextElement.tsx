import React, { useEffect, useState } from "react";
import { BlocText } from "../../../core/domain/entities/BlocText";
import { PropsBloc } from "../../types/element";


export const BlocTextElement = (props: PropsBloc) => {
    const { bloc, reference }  = props;

    return (
        <div ref={reference}>
            { (bloc as BlocText).property.text }
        </div>
    )
}