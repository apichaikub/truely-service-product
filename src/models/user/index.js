import bcrypt from 'bcrypt'
import attributes from './attributes'
import options from './options'

export default (sequelize) => {
  const User = sequelize.define('user', attributes, options)

  User.beforeCreate(async (user) => {
    const hash = await bcrypt.hash(user.password, bcrypt.genSaltSync())
    user.password = hash
  })

  return User
}
