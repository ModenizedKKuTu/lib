"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const logger_1 = __importDefault(require("../logger"));
const table_1 = __importDefault(require("./table"));
function db(options, timezone = 'asia/seoul') {
    logger_1.default.debug(timezone);
    const db = new sequelize_1.Sequelize(options.database, options.username, options.password, {
        dialect: 'mariadb',
        host: options.host,
        logging: false,
        pool: {
            idle: 10000,
            max: 20,
            min: 5
        },
        dialectOptions: {
            timezone: timezone
        },
        timezone: timezone
    });
    const tables = {
        User: table_1.default.user(db),
        Shop: table_1.default.shop(db),
        ShopDesc: table_1.default.shopDesc(db),
        WordKo: table_1.default.wordKo(db),
        WordKoMean: table_1.default.wordKoMean(db),
        WordEn: table_1.default.wordEn(db),
        WordEnMean: table_1.default.wordEnMean(db),
        CWKo: table_1.default.CWKo(db)
    };
    tables.User.sync();
    tables.Shop.sync();
    tables.WordKo.sync();
    tables.WordEn.sync();
    tables.Shop.hasOne(tables.ShopDesc, {
        foreignKey: '_id'
    });
    tables.ShopDesc.belongsTo(tables.Shop, {
        targetKey: '_id',
        foreignKey: '_id'
    });
    tables.WordKo.hasMany(tables.WordKoMean, {
        foreignKey: '_id'
    });
    tables.WordKoMean.belongsTo(tables.WordKo, {
        targetKey: '_id',
        foreignKey: '_id'
    });
    tables.WordEn.hasMany(tables.WordEnMean, {
        foreignKey: '_id'
    });
    tables.WordEnMean.belongsTo(tables.WordEn, {
        targetKey: '_id',
        foreignKey: '_id'
    });
    db.sync();
    return db;
}
exports.default = db;
