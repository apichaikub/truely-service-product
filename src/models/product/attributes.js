import DataTypes from 'sequelize/lib/data-types'

export default {
  productId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageSmall: {
    type: DataTypes.STRING,
    defaultValue: null,
  },
  imageMedium: {
    type: DataTypes.STRING,
    defaultValue: null,
  },
  imageLarge: {
    type: DataTypes.STRING,
    defaultValue: null,
  },
}
