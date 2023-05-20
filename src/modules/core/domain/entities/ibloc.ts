
export enum BlocType  {
    TEXT = "TEXT",
    HORIZONTAL_LAYOUT = "HORIZONTAL_LAYOUT",
    VERTICAL_LAYOUT = "VERTICAL_LAYOUT"
}

export interface IBloc{
    id: string,
    type: BlocType,
    name: string,
    property: object,
    children?: Array<Partial<IBloc>>

    addChilden(children: Array<IBloc>): void
    removeChild(child: IBloc): IBloc
}
