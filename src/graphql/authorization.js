import AuthService from '../services/authService'
import { AuthenticationError } from 'apollo-server-express'
import { USER_ROLE, TOKEN } from '../helper/enum'
import { pick } from '../utils/lib'

const getAuth = async (accessToken, refreshToken) => {
  try {
    if (!accessToken) {
      throw Error()
    }

    const authService = new AuthService()
    const response = await authService.verifyAuth(accessToken, refreshToken)
    const data = response.data.data

    const user = {
      id: data.user.id,
      role: data.user.role,
    }
    const newTokens = {
      ...pick(response.headers, TOKEN.values),
    }

    return {
      user,
      newTokens,
    }
  } catch (error) {
    return {}
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
  getAuth,
  isLoggedIn,
  isAdmin,
}
