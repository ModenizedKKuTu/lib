import { Model, Sequelize as sequelize } from 'sequelize';
declare class Shop extends Model {
}
export default function define(db: sequelize): typeof Shop;
export {};
