"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
class User extends sequelize_1.Model {
}
exports.User = User;
function define(db) {
    User.init({
        _id: {
            allowNull: false,
            primaryKey: true,
            type: sequelize_1.DataTypes.STRING(64),
            unique: true
        },
        authType: {
            allowNull: false,
            type: sequelize_1.DataTypes.STRING(20)
        },
        money: {
            allowNull: false,
            type: sequelize_1.DataTypes.INTEGER(),
            defaultValue: 0
        },
        kkutu: {
            allowNull: true,
            type: sequelize_1.DataTypes.JSON
        },
        lastLogin: {
            allowNull: false,
            type: sequelize_1.DataTypes.DATE()
        },
        box: {
            allowNull: true,
            type: sequelize_1.DataTypes.JSON
        },
        equip: {
            allowNull: true,
            type: sequelize_1.DataTypes.JSON
        },
        exordial: {
            allowNull: true,
            type: sequelize_1.DataTypes.TEXT()
        },
        black: {
            allowNull: true,
            type: sequelize_1.DataTypes.TEXT()
        },
        blackDate: {
            allowNull: true,
            type: sequelize_1.DataTypes.DATE()
        },
        server: {
            allowNull: true,
            type: sequelize_1.DataTypes.STRING(16)
        },
        friends: {
            allowNull: true,
            type: sequelize_1.DataTypes.JSON
        }
    }, {
        sequelize: db,
        modelName: 'kkutu_user',
        underscored: false,
        timestamps: false
    });
    return User;
}
exports.default = define;
