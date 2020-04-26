import attributes from './attributes'
import options from './options'

export default (sequelize) => {
  const User = sequelize.define('user', attributes, options)

  return User
}
