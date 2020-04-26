import DataTypes from 'sequelize/lib/data-types'

export default {
  userId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    // eslint-disable-next-line new-cap
    type: DataTypes.ENUM({
      values: ['USER', 'ADMIN'],
    }),
    defaultValue: null,
  },
}
