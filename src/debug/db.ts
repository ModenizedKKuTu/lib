import { db as database} from '../index'
import logger from '../logger'

export default async function dbTest () {
  try {
    logger.level = 'debug'

    const { db, tables } = await database({
      database: 'test',
      host: '127.0.0.1',
      password: 'testpassword',
      username: 'kkutu',
      port: 3306
    })

    db.authenticate()

    logger.debug('database connect and table make success')

    const test = await tables.User.findOne({
      where: {
        _id: 'test'
      }
    })

    logger.debug(test?.toJSON())

    return
  } catch (error) {
    logger.error(error)
  }
}
