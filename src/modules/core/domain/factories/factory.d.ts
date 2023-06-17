import { IBloc } from "../entities/ibloc";

export interface Factory<T = IBloc> {
    make(): T | null
}