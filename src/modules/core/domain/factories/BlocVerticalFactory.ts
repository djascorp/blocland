import { BlocVertical } from "../entities/BlocVertical"
import { Factory } from "./factory";

export class BlocVerticalFactory implements Factory<BlocVertical>{
    make(): BlocVertical {
        return new BlocVertical({name: 'NEW_BLOC'});
    }

}