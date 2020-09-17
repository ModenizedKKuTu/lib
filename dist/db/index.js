"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const beforeInitTables = __importStar(require("./table"));
async function db(options, timezone = 'asia/seoul') {
    const db = new sequelize_1.Sequelize(options.database, options.username, options.password, {
        dialect: 'mariadb',
        host: options.host,
        port: options.port,
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
        User: beforeInitTables.User(db),
        Shop: beforeInitTables.Shop(db),
        ShopDesc: beforeInitTables.ShopDesc(db),
        WordKo: beforeInitTables.WordKo(db),
        WordKoMean: beforeInitTables.WordKoMean(db),
        WordEn: beforeInitTables.WordEn(db),
        WordEnMean: beforeInitTables.WordEnMean(db),
        CWKo: beforeInitTables.CWKo(db),
        Session: beforeInitTables.Session(db)
    };
    await tables.User.sync();
    await tables.Shop.sync();
    await tables.WordKo.sync();
    await tables.WordEn.sync();
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
    await db.sync();
    return tables;
}
exports.default = db;
