import { Model, Sequelize as sequelize, DataTypes } from 'Sequelize'

class WordKOMean extends Model {}

export default function define (db: sequelize) {
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
    freezeTableName: true,
    modelName: 'kkutu_ko'
  })

  return WordKOMean
}

export { WordKOMean }
