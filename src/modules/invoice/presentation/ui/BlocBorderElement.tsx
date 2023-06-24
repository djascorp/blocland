import React from "react";
import { BlocElement } from "./BlocElement";
import { IBloc } from "../../../core/domain/entities/ibloc";
import { PropsBloc } from "../../types/element";
import { BlocBorder } from "../../../core/domain/entities/BlocBorder";

export interface PropsBlocBorder extends PropsBloc {
    bloc: BlocBorder
}

export const BlocBorderElement = (props: PropsBlocBorder) => {
    const { bloc, reference } = props;
    return (
        <div ref={reference} style={{
            display: 'grid',
            gridTemplateRows: '1fr 1fr 1fr',
            gridTemplateColumns: '1fr 1fr 1fr',
            border: "0.5px solid blue",
        }}>
            <div>
                &nbsp;
                {props.bloc.north && <BlocElement key={props.bloc.north.id} bloc={props.bloc.north as IBloc} />}
            </div>
            <div>
                 
                {props.bloc.east && <BlocElement key={props.bloc.east.id} bloc={props.bloc.east as IBloc} />}
            </div>
            <div>
                {props.bloc.center && <BlocElement key={props.bloc.center.id} bloc={props.bloc.center as IBloc} />}
            </div>
            <div>
                {props.bloc.west && <BlocElement key={props.bloc.west.id} bloc={props.bloc.west as IBloc} />}
            </div>
            <div>
                {props.bloc.south && <BlocElement key={props.bloc.south.id} bloc={props.bloc.south as IBloc} />}
            </div>
        </div>
    )
}