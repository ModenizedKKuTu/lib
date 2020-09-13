import { Model, Sequelize as sequelize, DataTypes } from 'sequelize'

export default function define (db: sequelize) {
  class Shop extends Model {}

  Shop.init({
    id: {
      type: DataTypes.STRING(64),
      primaryKey: true
    },
    cost: {
      type: DataTypes.INTEGER(),
      defaultValue: 0
    },
    hit: {
      type: DataTypes.INTEGER(),
      defaultValue: 0
    },
    term: {
      type: DataTypes.INTEGER(),
      defaultValue: 0
    },
    group: {
      type: DataTypes.STRING(10)
    },
    updatedAt: {
      type: DataTypes.DATE()
    },
    options: {
      type: DataTypes.JSON
    }
  }, {
    sequelize: db,
    timestamps: false,
    underscored: false,
    modelName: 'kkutu_shop'
  })

  return Shop
}
