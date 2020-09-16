import { Sequelize } from 'sequelize'
import * as beforeInitTables from './table'

export default function db (options: {
  database: string,
  username: string,
  password: string,
  host: string,
  port: number
}, timezone: string = 'asia/seoul') {
  const db = new Sequelize(
    options.database,
    options.username,
    options.password,
    {
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
    }
  )

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
  }

  tables.User.sync()
  tables.Shop.sync()
  tables.WordKo.sync()
  tables.WordEn.sync()

  tables.Shop.hasOne(tables.ShopDesc, {
    foreignKey: '_id'
  })
  tables.ShopDesc.belongsTo(tables.Shop, {
    targetKey: '_id',
    foreignKey: '_id'
  })

  tables.WordKo.hasMany(tables.WordKoMean, {
    foreignKey: '_id'
  })
  tables.WordKoMean.belongsTo(tables.WordKo, {
    targetKey: '_id',
    foreignKey: '_id'
  })

  tables.WordEn.hasMany(tables.WordEnMean, {
    foreignKey: '_id'
  })
  tables.WordEnMean.belongsTo(tables.WordEn, {
    targetKey: '_id',
    foreignKey: '_id'
  })

  db.sync()

  return tables
}
