import { Model, Sequelize as sequelize, DataTypes } from 'sequelize'

class User extends Model {}

export default function define (db: sequelize) {
  User.init({
    _id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING(64),
      unique: true
    },
    autyType: {
      allowNull: false,
      type: DataTypes.STRING(20)
    },
    money: {
      allowNull: false,
      type: DataTypes.INTEGER(),
      defaultValue: 0
    },
    kkutu: {
      allowNull: true,
      type: DataTypes.JSON
    },
    lastLogin: {
      allowNull: false,
      type: DataTypes.DATE()
    },
    box: {
      allowNull: true,
      type: DataTypes.JSON
    },
    equip: {
      allowNull: true,
      type: DataTypes.JSON
    },
    exordial: {
      allowNull: true,
      type: DataTypes.TEXT()
    },
    black: {
      allowNull: true,
      type: DataTypes.TEXT()
    },
    blackDate: {
      allowNull: true,
      type: DataTypes.DATE()
    },
    server: {
      allowNull: true,
      type: DataTypes.STRING(16)
    },
    friends: {
      allowNull: true,
      type: DataTypes.JSON
    }
  }, {
    sequelize: db,
    modelName: 'kkutu_user',
    underscored: false,
    timestamps: false
  })

  return User
}
