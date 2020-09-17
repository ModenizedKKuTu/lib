"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("./db"));
(async () => {
    try {
        await db_1.default();
    }
    catch (error) {
        console.error(error);
    }
    finally {
        process.exit(0);
    }
})();
