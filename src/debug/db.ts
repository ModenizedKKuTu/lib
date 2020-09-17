import { db } from '../index'
import logger from '../logger'

export default async function dbTest () {
  try {
    const database = await db({
      database: 'test',
      host: '127.0.0.1',
      password: 'testpassword',
      username: 'kkutu',
      port: 3306
    })

    logger.debug('database connect and table make success')

    return
  } catch (error) {
    logger.error(error)
  }
}
