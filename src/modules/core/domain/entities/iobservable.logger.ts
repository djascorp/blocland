import { IBloc } from "./ibloc"

export type DataLog = {
    action: string,
    bloc: IBloc,
    data: unknown
}
export interface Observable{
    observers: Array<Observer>,
    notify(data: DataLog):void ,
}

export interface Observer{
    subscribe(observable: Observable): void,
    unsubscribe(observable: Observable): void,

    log(data: DataLog):void ,
}