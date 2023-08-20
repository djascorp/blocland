import { BlocAbsolute } from "../entities/BlocAbsolute"
import { Factory } from "./factory";

export class BlocAbsoluteFactory implements Factory<BlocAbsolute>{
    make(): BlocAbsolute {
        return new BlocAbsolute({name: 'NEW_BLOC'});
    }

}