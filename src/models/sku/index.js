import attributes from './attributes'
import options from './options'

export default (sequelize) => {
  const Sku = sequelize.define('sku', attributes, options)

  Sku.associate = ({ Product }) => {
    Sku.belongsTo(Product, {
      foreignKey: {
        name: 'productId',
        allowNull: false,
      },
    })
  }

  return Sku
}
