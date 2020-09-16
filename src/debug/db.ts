import { db } from '../index'
import logger from '../logger'

export default function dbTest () {
  try {
    const database = db({
      database: 'kkutu',
      host: '127.0.0.1',
      password: 'testpassword',
      username: 'kkutu',
      port: 3306
    })

    logger.debug('database connect and table make success')
  } catch (error) {
    logger.error(error)
  }
}
