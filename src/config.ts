import { Observer } from "./modules/core/domain/entities/iobservable.logger";
import { LoggerConsole, LoggerMemory } from "./modules/core/domain/services/logger";

export const LOGGERS = [
    LoggerConsole ,
    LoggerMemory
];