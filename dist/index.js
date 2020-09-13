"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("./db"));
const redis_1 = __importDefault(require("./redis"));
const jwt_1 = __importDefault(require("./jwt"));
exports.default = {
    db: db_1.default,
    redis: redis_1.default,
    jwt: jwt_1.default
};
