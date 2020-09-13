"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class ShopDesc extends sequelize_1.Model {
}
function define(db) {
    ShopDesc.init({
        name_ko_KR: {
            type: sequelize_1.DataTypes.TEXT()
        },
        desc_ko_KR: {
            type: sequelize_1.DataTypes.TEXT()
        },
        name_en_US: {
            type: sequelize_1.DataTypes.TEXT()
        },
        desc_en_US: {
            type: sequelize_1.DataTypes.TEXT()
        }
    }, {
        sequelize: db,
        timestamps: false,
        underscored: false,
        modelName: 'kkutu_shop_desc'
    });
    return ShopDesc;
}
exports.default = define;
