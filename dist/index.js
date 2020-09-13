"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwt = exports.redis = exports.db = void 0;
const db_1 = __importDefault(require("./db"));
exports.db = db_1.default;
const redis_1 = __importDefault(require("./redis"));
exports.redis = redis_1.default;
const jwt_1 = __importDefault(require("./jwt"));
exports.jwt = jwt_1.default;
