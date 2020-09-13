import { cwd } from 'process'
import { Model, Sequelize as sequelize, DataTypes } from 'sequelize'

export default function define (db: sequelize) {
  class CWKo extends Model {}

  CWKo.init({
    id: {
      type: DataTypes.INTEGER(),
      primaryKey: true
    },
    map: {
      type: DataTypes.TEXT()
    },
    data: {
      type: DataTypes.TEXT()
    }
  }, {
    sequelize: db,
    timestamps: false,
    underscored: false,
    modelName: 'kkutu_cw_ko'
  })

  return CWKo
}
