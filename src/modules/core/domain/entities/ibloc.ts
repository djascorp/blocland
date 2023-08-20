
export enum BlocType  {
    TEXT = "TEXT",
    HORIZONTAL_LAYOUT = "HORIZONTAL_LAYOUT",
    VERTICAL_LAYOUT = "VERTICAL_LAYOUT",
    BORDER_LAYOUT = "BORDER_LAYOUT",
    ABSOLUTE_LAYOUT = "ABSOLUTE_LAYOUT",
}

export interface IBloc{
    id: string,
    type: BlocType,
    name: string,
    property: object,
    children?: Array<Partial<IBloc>>,
    beforeChildAddedListeners?: Array<CallableFunction>,
    afterChildAddedListeners?: Array<CallableFunction>,

    addChilden(children: Array<IBloc>): void
    removeChild(child: IBloc): IBloc
}
