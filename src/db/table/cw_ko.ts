import { Model, Sequelize as sequelize, DataTypes } from 'Sequelize'

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
    freezeTableName: true,
    modelName: 'kkutu_cw_ko'
  })

  return CWKo
}

export { CWKo }
