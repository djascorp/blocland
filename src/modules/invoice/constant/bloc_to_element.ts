import { BlocType } from "../../core/domain/entities/ibloc"
import { BlocBorderElement } from "../presentation/ui/BlocBorderElement";
import { BlocHorizontalElement } from "../presentation/ui/BlocHorizontalElement";
import { BlocTextElement } from "../presentation/ui/BlocTextElement";
import { BlocVerticalElement } from "../presentation/ui/BlocVerticalElement";

export const BLOC_TO_ELEMENT: Map<BlocType,unknown > = new Map();

BLOC_TO_ELEMENT.set(BlocType.TEXT,BlocTextElement);
BLOC_TO_ELEMENT.set(BlocType.VERTICAL_LAYOUT,BlocVerticalElement);
BLOC_TO_ELEMENT.set(BlocType.HORIZONTAL_LAYOUT,BlocHorizontalElement);
BLOC_TO_ELEMENT.set(BlocType.BORDER_LAYOUT,BlocBorderElement);