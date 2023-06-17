import { BlocHorizontal } from "../entities/BlocHorizontal"
import { Factory } from "./factory";

export class BlocHorizontalFactory implements Factory<BlocHorizontal>{
    make(): BlocHorizontal {
        return new BlocHorizontal({name: 'NEW_BLOC'});
    }

}