import { IBloc } from "../entities/ibloc";
import { DataLog, Observable, Observer } from "../entities/iobservable.logger";


export enum LogAction  {
    ADD_CHILD = 'ADD CHILD',
    REMOVE_CHILD = 'REMOVE CHILD'
}

export class Logger implements Observable{
    observers: Observer[] = [];

    notify(data: { action: string; bloc: IBloc; data: unknown; }): void {
        this.observers.forEach(observer => {
            observer.log(data);
        })
    }
    
    write(action: string, relatedBloc: IBloc, value: unknown){
        this.notify({action: action, bloc: relatedBloc, data: value});
    }
}

export abstract class BaseLogger implements Observer{
    subscribe(observable: Observable): void {
        observable.observers.push(this as Observer);
    }
    unsubscribe(observable: Observable): void {
        let index_of_current_observer = observable.observers.indexOf(this);
        observable.observers.splice(index_of_current_observer,1);
    }
    abstract log(data: { action: string; bloc: IBloc; data: unknown; }): void;
}

export class LoggerConsole extends BaseLogger{
    log(data: { action: string; bloc: IBloc; data: unknown; }): void {
        console.log(data);
    }
}
export class LoggerMemory extends BaseLogger{
    actions: Array<DataLog> = []; // List of all users actions

    log(data: { action: string; bloc: IBloc; data: unknown; }): void {
        this.actions.push(data);
    }
    
}