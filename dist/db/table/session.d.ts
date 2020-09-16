import { Model, Sequelize as sequelize } from 'sequelize';
declare class Session extends Model {
}
export default function define(db: sequelize): typeof Session;
export { Session };
