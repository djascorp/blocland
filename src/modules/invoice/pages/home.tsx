import React, { useEffect, useState } from "react"
import { IBloc } from "../../core/domain/entities/ibloc"
import { BlocText } from "../../core/domain/entities/BlocText"
import { BlocElement } from "../ui/BlocElement";
import { BlocVertical } from "../../core/domain/entities/BlocVertical";

export const HomePage = () => {
    const parent_Bloc = new BlocVertical({ name: 'VB' })

    const text_bloc: IBloc = new BlocText({ name: 'BT', property:{ text: "Hello Bloc"} });
    const text_bloc_2: IBloc = new BlocText({ name: 'BT2', property: {text: "Second Bloc"} });
    const [counter, setCounter] = useState(0);

    parent_Bloc.addChilden([text_bloc_2]);


    useEffect(() => {
        setTimeout(() => {
            parent_Bloc.addChilden([text_bloc]);
            console.log("Add Another Bloc");
            setCounter(parent_Bloc.children!.length)
        }, 3000)
    }, []);


    return (
        <div>
            <div>
                {counter}
            </div>
            <div>
                <BlocElement bloc={parent_Bloc as IBloc} />
            </div>

        </div>
    )
}