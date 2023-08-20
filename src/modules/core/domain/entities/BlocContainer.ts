import { BlocType, IBloc } from "./ibloc";
import { generateRandomId } from "../../utils/primitive";

export class BlocContainer implements IBloc{
    id: string = generateRandomId();
    type: BlocType = BlocType.HORIZONTAL_LAYOUT;
    name: string;
    property: object = {};
    children?: Partial<IBloc>[] | undefined = [];
    beforeChildAddedListeners?: Array<CallableFunction> = [];
    afterChildAddedListeners?: Array<CallableFunction> = [];
    
    constructor(bloc_data: {name?: string}){
        this.name = bloc_data.name!;
    }

    beforeChildrenAdded(children: IBloc[]): void {
        this.beforeChildAddedListeners?.forEach(fn => fn(children));
    }
    afterChildrenAdded(children: IBloc[]): void {
        this.afterChildAddedListeners?.forEach(fn => fn(children));
    }
    

    addChilden(children: IBloc[]): void {
        this.beforeChildrenAdded(children);
        this.children?.push(...children);
        this.afterChildrenAdded(children);
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