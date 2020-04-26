import { DataTypes } from 'sequelize'

export default {
  userId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [4, 100],
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [6, 48],
    },
  },
  role: {
    type: DataTypes.ENUM({
      values: ['USER', 'ADMIN'],
    }),
    defaultValue: null,
  },
}
