"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Session = void 0;
const sequelize_1 = require("sequelize");
class Session extends sequelize_1.Model {
}
exports.Session = Session;
function define(db) {
    Session.init({
        profile: {
            type: sequelize_1.DataTypes.JSON
        },
        _id: {
            type: sequelize_1.DataTypes.STRING(64)
        },
        createdAt: {
            type: sequelize_1.DataTypes.DATE
        }
    }, {
        sequelize: db,
        timestamps: false,
        underscored: false,
        modelName: 'kkutu_session'
    });
    return Session;
}
exports.default = define;
