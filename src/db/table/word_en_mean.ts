import { Model, Sequelize as sequelize, DataTypes } from 'sequelize'

export default function define (db: sequelize) {
  class WordENMean extends Model {}

  WordENMean.init({
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
    modelName: 'kkutu_en_mean'
  })

  return WordENMean
}
