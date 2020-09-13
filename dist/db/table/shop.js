"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Shop extends sequelize_1.Model {
}
function define(db) {
    Shop.init({
        _id: {
            type: sequelize_1.DataTypes.STRING(64),
            primaryKey: true
        },
        cost: {
            type: sequelize_1.DataTypes.INTEGER(),
            defaultValue: 0
        },
        hit: {
            type: sequelize_1.DataTypes.INTEGER(),
            defaultValue: 0
        },
        term: {
            type: sequelize_1.DataTypes.INTEGER(),
            defaultValue: 0
        },
        group: {
            type: sequelize_1.DataTypes.STRING(10)
        },
        updatedAt: {
            type: sequelize_1.DataTypes.DATE()
        },
        options: {
            type: sequelize_1.DataTypes.JSON
        }
    }, {
        sequelize: db,
        timestamps: false,
        underscored: false,
        modelName: 'kkutu_shop'
    });
    return Shop;
}
exports.default = define;
