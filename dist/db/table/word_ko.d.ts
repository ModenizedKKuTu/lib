import { Model, Sequelize as sequelize } from 'sequelize';
declare class WordKO extends Model {
}
export default function define(db: sequelize): typeof WordKO;
export { WordKO };
