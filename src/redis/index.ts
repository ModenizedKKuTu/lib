import bluebird from 'bluebird'
import * as Redis from 'redis'

declare module 'redis' {
  export interface RedisClient extends NodeJS.EventEmitter {
    getAsync(key: string): Promise<string|null>
    setAsync(key: string, value: string, mode?: string, duration?: Number): Promise<any>
  }
}

export default function getRedisClient (options: {
  db: number,
  host: string,
  password: string|undefined,
  port: number
}): Redis.RedisClient {
  if (!options.password) {
    delete options.password
  }

  const oldRedis = Redis.createClient(options)
  const db = bluebird.promisifyAll(oldRedis) as Redis.RedisClient

  return db
}
