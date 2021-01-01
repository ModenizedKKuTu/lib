import { Model, Sequelize as sequelize, DataTypes } from 'Sequelize'

class WordEN extends Model {}

export default function define (db: sequelize) {
  WordEN.init({
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
    },
    start_kkutu: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    end_kkutu: {
      type: DataTypes.CHAR(3),
      allowNull: true
    }
  }, {
    sequelize: db,
    timestamps: false,
    underscored: false,
    freezeTableName: true,
    modelName: 'kkutu_en'
  })

  return WordEN
}

export { WordEN }
