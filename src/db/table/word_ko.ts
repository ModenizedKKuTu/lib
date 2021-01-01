import { Model, Sequelize as sequelize, DataTypes } from 'Sequelize'

class WordKO extends Model {}

export default function define (db: sequelize) {
  WordKO.init({
    _id: {
      type: DataTypes.STRING(256),
      primaryKey: true
    },
    hit: {
      type: DataTypes.INTEGER(),
      defaultValue: 0
    },
    start: {
      type: DataTypes.CHAR(1)
    },
    end: {
      type: DataTypes.CHAR(1)
    }
  }, {
    sequelize: db,
    timestamps: false,
    underscored: false,
    freezeTableName: true,
    modelName: 'kkutu_ko'
  })

  return WordKO
}

export { WordKO }
