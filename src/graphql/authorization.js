import AuthService from '../services/authService'
import { AuthenticationError } from 'apollo-server-express'
import { USER_ROLE } from '../helper/enum'

const getUser = async (accessToken, refreshToken) => {
  try {
    if (!accessToken) {
      throw Error()
    }

    const authService = new AuthService()
    const response = await authService.verifyAuth(accessToken, refreshToken)
    const data = response.data.data

    return {
      id: data.user.id,
      role: data.user.role,
    }
  } catch (error) {
    return null
  }
}

const isLoggedIn = (root, args, { user }) => {
  if (user === null) {
    throw new AuthenticationError('Unauthorized')
  }
}

const isAdmin = (root, args, { user }) => {
  if (user.role !== USER_ROLE.ENUM.ADMIN) {
    throw new AuthenticationError('Admin role is required')
  }
}

export {
  getUser,
  isLoggedIn,
  isAdmin,
}
