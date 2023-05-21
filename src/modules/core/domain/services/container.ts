import { IBloc } from "../entities/ibloc";
import { IContainer,ContainerParams } from "../entities/icontainer";
import { LogAction } from "./logger";
import { Logger } from "./logger";


export class Container implements IContainer{
    rootBloc!: IBloc;
    registeredBlocs: IBloc[] = [];
    registeredBlocsById: Map<string, IBloc> = new Map<string,IBloc>();
    logger!: Logger;  

    constructor(params : { logger : Logger }){
        this.logger = params.logger;
    }
   


    init(containerParams: Partial<ContainerParams>): void {
        this.rootBloc = containerParams.rootBloc!;
        this.registeredBlocs = [this.rootBloc];
        if(containerParams.bloc_container){
            this.registeredBlocsById = containerParams.bloc_container;
        }
        this.registeredBlocsById.set(this.rootBloc.id, this.rootBloc);
    }
    log(action: string, relatedBloc: IBloc, value: unknown): void {
        this.logger.write(action,relatedBloc,value);
    }
    registerBloc(bloc: IBloc){
        this.registeredBlocsById.set(bloc.id, bloc);
        this.registeredBlocs.push(bloc);
    }
    unresisterBloc(bloc: IBloc){
        this.registeredBlocsById.delete(bloc.id);

        let index = this.registeredBlocs.indexOf(bloc)!;
        if(index > -1 ){
            this.registeredBlocs.splice(index,1);
        }else{
            throw new Error("The specified bloc doesn't exist!");
        }
    }
    getBlocById(id: string): IBloc | undefined {
        // const current_bloc = this.registeredBlocs.filter(bloc => bloc.id == id);
        // if(current_bloc.length){
        //     return current_bloc[0];
        // }
        // return undefined;
        return this.registeredBlocsById.get(id)
    }
    addChild(parentBloc: IBloc, childBloc: IBloc): void {
        this.log(LogAction.ADD_CHILD, parentBloc, childBloc);
        parentBloc.addChilden([childBloc]);
        this.registerBloc(childBloc);
    }
    removeChild(parentBloc: IBloc, childBloc: IBloc): IBloc {
        this.log(LogAction.REMOVE_CHILD, parentBloc, childBloc);
        parentBloc.removeChild(childBloc);
        this.unresisterBloc(childBloc);
        
        return childBloc;
    }

}