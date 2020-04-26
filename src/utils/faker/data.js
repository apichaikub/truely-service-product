const users = [
  {
    username: 'admin1',
    password: '123456',
    role: 'ADMIN',
  },
  {
    username: 'admin2',
    password: '123456',
    role: 'ADMIN',
  },
  {
    username: 'user1',
    password: '123456',
    role: 'USER',
  },
  {
    username: 'user2',
    password: '123456',
    role: 'USER',
  },
  {
    username: 'admin3',
    password: '123456',
    role: 'ADMIN',
  },
]

const products = [
  {
    name: 'Shirt 001',
    skus: [{
      code: 'SHIRT-BLUE-S',
      attributes: [{ 'name': 'size', 'option': 'S' }],
      price: 2500,
      inStock: 30,
      discountType: 'PERCENTAGE',
      productId: null,
    },
    {
      code: 'SHIRT-BLUE-M',
      attributes: [{ 'name': 'size', 'option': 'M' }],
      price: 2500,
      inStock: 30,
      discountType: 'PERCENTAGE',
      productId: null,
    }],
  },
  {
    name: 'Shirt 002',
  },
  {
    name: 'Shirt 003',
  },
]

export {
  users,
  products,
}
