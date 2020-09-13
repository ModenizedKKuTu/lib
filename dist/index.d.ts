import db from './db';
import redis from './redis';
import jwt from './jwt';
declare const _default: {
    db: typeof db;
    redis: typeof redis;
    jwt: typeof jwt;
};
export default _default;
