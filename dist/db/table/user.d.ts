import { Model, Sequelize as sequelize } from 'sequelize';
declare class User extends Model {
}
export default function define(db: sequelize): typeof User;
export {};
