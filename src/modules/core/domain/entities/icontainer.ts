import { IBloc } from "./ibloc";
export interface ContainerParams{
    rootBloc: IBloc
}


export interface IContainer {
    rootBloc: IBloc
    registeredBlocs: Array<IBloc>
    registeredBlocsById: Map<string,IBloc>

    init(containerParams: Partial<ContainerParams>): void,

    // Log Related
    log(action: string,relatedBloc: IBloc,value: unknown): void,

    // Bloc Related
    getBlocById(id: string): IBloc | undefined
    addChild(parentBloc: IBloc, childBloc: IBloc): void,
    removeChild(parentBloc: IBloc, childBloc: IBloc): IBloc,
}