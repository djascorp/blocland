import { BlocBorder } from "../entities/BlocBorder"
import { Factory } from "./factory";

export class BlocBorderFactory implements Factory<BlocBorder>{
    make(): BlocBorder {
        return new BlocBorder({name: 'NEW_BLOC'});
    }

}