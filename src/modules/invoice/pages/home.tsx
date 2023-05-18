import React from "react"
import { IBloc } from "../../core/domain/entities/ibloc"
import { BlocText } from "../../core/domain/entities/BlocText"
import { BlocElement } from "../ui/BlocElement";
import { BlocVertical } from "../../core/domain/entities/BlocVertical";

export const HomePage = () => {
    const parent_Bloc = new BlocVertical({name: 'VB'})
    
    const text_bloc: IBloc = new BlocText({name: 'BT', data: "Hello Bloc"});
    const text_bloc_2: IBloc = new BlocText({name: 'BT2', data: "Second Bloc"});
    parent_Bloc.addChilden([text_bloc, text_bloc_2]);

    return (
        <div>
            <BlocElement bloc={parent_Bloc} />
        </div>
    )
}