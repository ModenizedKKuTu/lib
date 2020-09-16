import { Model, Sequelize as sequelize } from 'sequelize';
declare class WordEN extends Model {
}
export default function define(db: sequelize): typeof WordEN;
export { WordEN };
