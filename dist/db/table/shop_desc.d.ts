import { Model, Sequelize as sequelize } from 'sequelize';
declare class ShopDesc extends Model {
}
export default function define(db: sequelize): typeof ShopDesc;
export {};
