import { IBloc } from "../entities/ibloc";
import { IAction } from "./iaction";

export class BlocToObject implements IAction<object>{
    bloc: IBloc
    constructor(bloc: IBloc){
        this.bloc = bloc;
    }
    blocToObject(bloc: IBloc) : object {
        return {
            id: bloc.id,
            name: bloc.name,
            property: bloc.property,
            type: bloc.type,
            children: bloc.children?.map(b => this.blocToObject(b as unknown as IBloc))
        }
    }
    execute(): object{
        return this.blocToObject(this.bloc);
    }

}