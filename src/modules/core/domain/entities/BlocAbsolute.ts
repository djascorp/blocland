import { BlocContainer } from "./BlocContainer";
import { BlocType } from "./ibloc";

export class BlocAbsolute extends BlocContainer{
    type: BlocType = BlocType.ABSOLUTE_LAYOUT;
}