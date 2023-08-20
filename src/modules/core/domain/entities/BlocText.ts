import { generateRandomId } from "../../utils/primitive";
import { BlocType, IBloc } from "./ibloc";

export class BlocText implements IBloc{
    id: string = generateRandomId();
    type: BlocType = BlocType.TEXT;
    name: string = '';
    property: object & {text : string };
    children?: Partial<IBloc>[] | undefined = [];

    constructor(bloc_data: {name?: string, property?: object & {text : string }}){
        this.name = bloc_data.name!;
        this.property = bloc_data.property!;
    }
    
    beforeChildrenAdded(children: IBloc[]): void {
        throw new Error("Method not implemented.");
    }
    afterChildrenAdded(children: IBloc[]): void {
        throw new Error("Method not implemented.");
    }
    

    addChilden(children: IBloc[]): void {
        throw new Error("Text bloc doesn't have child Bloc");
    }
    removeChild(child: IBloc): IBloc {
        throw new Error("Text bloc doesn't have child Bloc");
    }

}