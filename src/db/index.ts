import { Sequelize } from 'sequelize'
import beforeInitTables from './table'

export default function db (options: {
  database: string,
  username: string,
  password: string,
  host: string
}) {
  const db = new Sequelize(
    options.database,
    options.username,
    options.password,
    {
      dialect: 'mariadb',
      host: options.host,
      logging: false,
      pool: {
        acquire: 30000,
        idle: 10000,
        max: 5,
        min: 0
      }
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

    CWKo: beforeInitTables.CWKo(db)
  }

  tables.Shop.hasOne(tables.ShopDesc, {
    foreignKey: 'id'
  })
  tables.ShopDesc.belongsTo(tables.Shop)

  tables.WordKo.hasMany(tables.WordKoMean, {
    foreignKey: 'id'
  })
  tables.WordKoMean.belongsTo(tables.WordKo)

  tables.WordEn.hasMany(tables.WordEnMean, {
    foreignKey: 'id'
  })
  tables.WordEnMean.belongsTo(tables.WordEn)

  db.sync()
}
