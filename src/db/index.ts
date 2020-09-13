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
    Shop: beforeInitTables.shop(db)
  }
}
