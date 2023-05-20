import { BlocType, IBloc } from "./ibloc";
import { generateRandomId } from "../../utils/primitive";

export class BlocVertical implements IBloc{
    id: string = generateRandomId();
    type: BlocType = BlocType.VERTICAL_LAYOUT;
    name: string;
    data: unknown;
    property: object = {};
    children?: Partial<IBloc>[] | undefined = [];
    
    constructor(bloc_data: {name?: string}){
        this.name = bloc_data.name!;
    }
    

    addChilden(children: IBloc[]): void {
        this.children?.push(...children);
    }
    removeChild(child: IBloc): IBloc {
        let index = this.children?.indexOf(child)!;
        if(index > -1){
            this.children?.splice(index!,1);
            return child;
        }
        throw new Error("The specified bloc doesn't exist!");
    }
    
}