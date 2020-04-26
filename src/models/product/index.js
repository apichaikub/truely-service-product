import attribues from './attributes'
import options from './options'

export default (sequelize) => {
  const Product = sequelize.define('product', attribues, options)

  Product.associate = ({ Sku }) => {
    Product.hasMany(Sku, {
      foreignKey: {
        name: 'productId',
        allowNull: false,
      },
    })
  }

  return Product
}
