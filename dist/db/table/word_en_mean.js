"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WordENMean = void 0;
const sequelize_1 = require("sequelize");
class WordENMean extends sequelize_1.Model {
}
exports.WordENMean = WordENMean;
function define(db) {
    WordENMean.init({
        type: {
            type: sequelize_1.DataTypes.TEXT()
        },
        mean: {
            type: sequelize_1.DataTypes.TEXT()
        },
        flag: {
            type: sequelize_1.DataTypes.INTEGER(),
            defaultValue: 0
        },
        theme: {
            type: sequelize_1.DataTypes.TEXT()
        }
    }, {
        sequelize: db,
        timestamps: false,
        underscored: false,
        modelName: 'kkutu_en_mean'
    });
    return WordENMean;
}
exports.default = define;
