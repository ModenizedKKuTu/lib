/// <reference types="node" />
import * as Redis from 'redis';
declare module 'redis' {
    interface RedisClient extends NodeJS.EventEmitter {
        getAsync(key: string): Promise<string | null>;
        setAsync(key: string, value: string, mode?: string, duration?: number): Promise<any>;
    }
}
export default function getRedisClient(options: {
    db: number;
    host: string;
    password: string | undefined;
    port: number;
}): Redis.RedisClient;
