/* eslint-disable no-unused-vars */
const { Sequelize, Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Call extends Model {
    static associate(models) {
      // define association here
    }
  }

  Call.init(
    {
      // table definition
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      callSid: {
        type: Sequelize.STRING,
      },
      CallStatus: {
        type: Sequelize.STRING,
      },
      Caller: {
        type: Sequelize.STRING,
      },

      CallerCountry: {
        type: Sequelize.STRING,
      },
      Direction: {
        type: Sequelize.STRING,
      },
      RecordingDuration: {
        type: Sequelize.STRING,
      },
      RecordingSid: {
        type: Sequelize.STRING,
      },
      RecordingUrl: {
        type: Sequelize.STRING,
      },
      Called: {
        type: Sequelize.STRING,
      },
      ToCountry: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
    },
    {
      // timestamps: false,
      modelName: 'Call',
      sequelize,
    }
  )

  return Call
}
