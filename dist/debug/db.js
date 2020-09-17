"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const logger_1 = __importDefault(require("../logger"));
async function dbTest() {
    try {
        const database = await index_1.db({
            database: 'test',
            host: '127.0.0.1',
            password: 'testpassword',
            username: 'kkutu',
            port: 3306
        });
        logger_1.default.debug('database connect and table make success');
        return;
    }
    catch (error) {
        logger_1.default.error(error);
    }
}
exports.default = dbTest;
