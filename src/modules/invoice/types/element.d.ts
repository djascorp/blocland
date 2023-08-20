import { LegacyRef } from "react";
import { IBloc } from "../../core/domain/entities/ibloc";

export interface ElementITemProps {
    icon: string,
    name: string,
    type: string,
    factory: Factory | null,
}
export interface DropResult{
    target: string,
    container: Container,
    parent: IBloc
}

export interface PropsBloc {
    bloc: IBloc,
    reference?: LegacyRef,
    className?: string, 
}
