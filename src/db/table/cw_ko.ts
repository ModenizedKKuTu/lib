import { Model, Sequelize as sequelize, DataTypes } from 'sequelize'

class CWKo extends Model {}

export default function define (db: sequelize) {
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

export { CWKo }
