import { Sequelize } from 'sequelize';
export default function db(options: {
    database: string;
    username: string;
    password: string;
    host: string;
}, timezone?: string): Sequelize;
