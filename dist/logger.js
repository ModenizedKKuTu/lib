"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const log4js_1 = __importDefault(require("log4js"));
const logger = log4js_1.default.getLogger();
if (process.env.NODE_ENV === 'production') {
    logger.level = 'INFO';
}
else if (process.env.NODE_ENV === 'development') {
    logger.level = 'DEBUG';
}
else {
    logger.level = 'DEBUG';
    process.env.NODE_ENV = 'development';
}
exports.default = logger;
