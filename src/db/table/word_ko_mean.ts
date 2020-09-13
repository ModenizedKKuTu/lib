import { Model, Sequelize as sequelize, DataTypes } from 'sequelize'

export default function define (db: sequelize) {
  class WordKOMean extends Model {}

  WordKOMean.init({
    type: {
      type: DataTypes.TEXT()
    },
    mean: {
      type: DataTypes.TEXT()
    },
    flag: {
      type: DataTypes.INTEGER(),
      defaultValue: 0
    },
    theme: {
      type: DataTypes.TEXT()
    }
  }, {
    sequelize: db,
    timestamps: false,
    underscored: false,
    modelName: 'kkutu_ko'
  })

  return WordKOMean
}
