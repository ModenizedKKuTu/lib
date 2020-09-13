"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class WordEN extends sequelize_1.Model {
}
function define(db) {
    WordEN.init({
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
        },
        start_kkutu: {
            type: sequelize_1.DataTypes.CHAR(3),
            allowNull: true
        },
        end_kkutu: {
            type: sequelize_1.DataTypes.CHAR(3),
            allowNull: true
        }
    }, {
        sequelize: db,
        timestamps: false,
        underscored: false,
        modelName: 'kkutu_en'
    });
    return WordEN;
}
exports.default = define;
