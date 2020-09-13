"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("./user"));
const shop_1 = __importDefault(require("./shop"));
const shop_desc_1 = __importDefault(require("./shop_desc"));
const word_ko_1 = __importDefault(require("./word_ko"));
const word_ko_mean_1 = __importDefault(require("./word_ko_mean"));
const word_en_1 = __importDefault(require("./word_en"));
const word_en_mean_1 = __importDefault(require("./word_en_mean"));
const cw_ko_1 = __importDefault(require("./cw_ko"));
exports.default = {
    user: user_1.default,
    shop: shop_1.default,
    shopDesc: shop_desc_1.default,
    wordKo: word_ko_1.default,
    wordKoMean: word_ko_mean_1.default,
    wordEn: word_en_1.default,
    wordEnMean: word_en_mean_1.default,
    CWKo: cw_ko_1.default
};
