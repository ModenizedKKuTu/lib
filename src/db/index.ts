import { Sequelize } from 'sequelize'
import logger from '../logger'
import beforeInitTables from './table'

export default function db (options: {
  database: string,
  username: string,
  password: string,
  host: string
}, timezone: string = 'asia/seoul') {
  logger.debug(timezone)

  const db = new Sequelize(
    options.database,
    options.username,
    options.password,
    {
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
    }
  )

  const tables = {
    User: beforeInitTables.user(db),

    Shop: beforeInitTables.shop(db),
    ShopDesc: beforeInitTables.shopDesc(db),

    WordKo: beforeInitTables.wordKo(db),
    WordKoMean: beforeInitTables.wordKoMean(db),

    WordEn: beforeInitTables.wordEn(db),
    WordEnMean: beforeInitTables.wordEnMean(db),

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
