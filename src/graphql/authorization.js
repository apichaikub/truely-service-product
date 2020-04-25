import { AuthenticationError } from 'apollo-server-express'

export const getUser = (accessToken = '') => {
  if (!accessToken) {
    return null
  }

  return {
    accessToken,
    userId: 1,
    username: 'apichaikub',
    roles: ['admin'],
  }
}

export const isLoggedIn = (root, args, { user }) => {
  if (user === null) {
    throw new AuthenticationError('you must be logged in')
  }
}

export const isAdmin = (root, args, { user }) => {
  if (user.roles.includes('admin') === false) {
    throw new AuthenticationError('you are not admin')
  }
}
