import { BlocContainer } from "./BlocContainer";
import { BlocType, IBloc } from "./ibloc";

export class BlocAbsolute extends BlocContainer{
    type: BlocType = BlocType.ABSOLUTE_LAYOUT;

    constructor(bloc_data : {name?: string}){
        super(bloc_data);
        // this.beforeChildAddedListeners.push((children: IBloc[]) => {
        //     console.log("ITEM TO ADD", children);
        // })
    }
}