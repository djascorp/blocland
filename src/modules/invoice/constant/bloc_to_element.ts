import { BlocType } from "../../core/domain/entities/ibloc"
import { BlocHorizontalElement } from "../ui/BlocHorizontalElement";
import { BlocTextElement } from "../ui/BlocTextElement";
import { BlocVerticalElement } from "../ui/BlocVerticalElement";

export const BLOC_TO_ELEMENT: Map<BlocType,unknown > = new Map();

BLOC_TO_ELEMENT.set(BlocType.TEXT,BlocTextElement);
BLOC_TO_ELEMENT.set(BlocType.VERTICAL_LAYOUT,BlocVerticalElement);
BLOC_TO_ELEMENT.set(BlocType.HORIZONTAL_LAYOUT,BlocHorizontalElement);