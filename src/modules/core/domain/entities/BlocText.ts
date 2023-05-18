import { generateRandomId } from "../../utils/primitive";
import { BlocType, IBloc } from "./ibloc";

export class BlocText implements IBloc{
    id: string = generateRandomId();
    type: BlocType = BlocType.TEXT;
    name: string = '';
    data: unknown;
    property: unknown = {};
    children?: Partial<IBloc>[] | undefined = [];

    constructor(bloc_data: {name?: string, data?: string}){
        this.name = bloc_data.name!;
        this.data = bloc_data.data!;
    }
    

    addChilden(children: IBloc[]): void {
        throw new Error("Text bloc doesn't have child Bloc");
    }
    removeChild(child: IBloc): IBloc {
        throw new Error("Text bloc doesn't have child Bloc");
    }

}