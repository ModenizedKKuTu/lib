"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WordKO = void 0;
const sequelize_1 = require("sequelize");
class WordKO extends sequelize_1.Model {
}
exports.WordKO = WordKO;
function define(db) {
    WordKO.init({
        _id: {
            type: sequelize_1.DataTypes.STRING(256),
            primaryKey: true
        },
        hit: {
            type: sequelize_1.DataTypes.INTEGER(),
            defaultValue: 0
        },
        start: {
            type: sequelize_1.DataTypes.CHAR(1)
        },
        end: {
            type: sequelize_1.DataTypes.CHAR(1)
        }
    }, {
        sequelize: db,
        timestamps: false,
        underscored: false,
        modelName: 'kkutu_ko'
    });
    return WordKO;
}
exports.default = define;
