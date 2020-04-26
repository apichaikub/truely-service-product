import DataTypes from 'sequelize/lib/data-types'

export default {
  skuId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  isAvailable: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  code: {
    type: DataTypes.STRING,
    defaultValue: true,
  },
  attributes: {
    type: DataTypes.JSON,
    defaultValue: [],
  },
  price: {
    // eslint-disable-next-line new-cap
    type: DataTypes.DECIMAL(10, 2),
  },
  inStock: {
    // eslint-disable-next-line new-cap
    type: DataTypes.DECIMAL(10, 2),
  },
  discountType: {
    // eslint-disable-next-line new-cap
    type: DataTypes.ENUM({
      values: ['PERCENTAGE', 'CURRENTCY'],
    }),
  },
  discountAmount: {
    // eslint-disable-next-line new-cap
    type: DataTypes.DECIMAL(10, 2),
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
  productId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
}
