import { Model, Sequelize as sequelize, DataTypes } from 'sequelize'

export default function define (db: sequelize) {
  class WordKO extends Model {}

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
    modelName: 'kkutu_ko'
  })

  return WordKO
}
