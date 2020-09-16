import { Model, Sequelize as sequelize, DataTypes } from 'sequelize'

class Session extends Model {}

export default function define (db: sequelize) {
  Session.init({
    profile: {
      type: DataTypes.JSON
    },
    _id: {
      type: DataTypes.STRING(64)
    },
    createdAt: {
      type: DataTypes.DATE
    }
  }, {
    sequelize: db,
    timestamps: false,
    underscored: false,
    modelName: 'kkutu_session'
  })

  return Session
}
