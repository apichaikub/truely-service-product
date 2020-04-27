import { DataTypes } from 'sequelize'

export default {
  productId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  detail: {
    type: DataTypes.TEXT,
  },
  specifications: {
    type: DataTypes.JSON,
    defaultValue: [],
  },
  rating: {
    type: DataTypes.DECIMAL(2, 1),
    defaultValue: 0.00,
    validate: {
      isFloat: true,
      min: 0,
      max: 5,
    },
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
