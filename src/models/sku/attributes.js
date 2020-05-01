import { DataTypes } from 'sequelize'
import { isValidAttributes as isValid } from '../../helper/validator'

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
  },
  attributes: {
    type: DataTypes.JSON,
    defaultValue: [],
    validate: {
      isEven: (attributes) => {
        if (!isValid(attributes)) {
          throw new Error('attributes is invalid format.')
        }
      },
    },
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
  },
  inStock: {
    type: DataTypes.DECIMAL(10, 2),
  },
  discountType: {
    type: DataTypes.ENUM({
      values: ['PERCENTAGE', 'CURRENTCY'],
    }),
  },
  discountAmount: {
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
