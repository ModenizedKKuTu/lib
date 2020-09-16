"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CWKo = void 0;
const sequelize_1 = require("sequelize");
class CWKo extends sequelize_1.Model {
}
exports.CWKo = CWKo;
function define(db) {
    CWKo.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER(),
            primaryKey: true
        },
        map: {
            type: sequelize_1.DataTypes.TEXT()
        },
        data: {
            type: sequelize_1.DataTypes.TEXT()
        }
    }, {
        sequelize: db,
        timestamps: false,
        underscored: false,
        modelName: 'kkutu_cw_ko'
    });
    return CWKo;
}
exports.default = define;
