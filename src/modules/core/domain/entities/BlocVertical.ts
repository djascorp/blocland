import { BlocContainer } from "./BlocContainer";
import { BlocType } from "./ibloc";

export class BlocVertical extends BlocContainer{
    type: BlocType = BlocType.VERTICAL_LAYOUT;
}