import { BlocContainer } from "./BlocContainer";
import { BlocType } from "./ibloc";

export class BlocHorizontal extends BlocContainer{
    type: BlocType = BlocType.HORIZONTAL_LAYOUT;
}