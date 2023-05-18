// The Master Initialize everything

import { LOGGERS } from "../../../../config";
import { Observer } from "../entities/iobservable.logger";
import { Logger } from "./logger";

export class Master{
    init(){
        // Init Loggers
        let logger = new Logger();
        LOGGERS.forEach(ObserverClass => {
            const observer:Observer = new ObserverClass;
            observer.subscribe(logger);
        })


        return {
            logger
        }
    }
}