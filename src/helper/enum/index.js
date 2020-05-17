const RESPONSE_STATUS = Object.freeze({
  ENUM: {
    'FAIL': 'FAIL',
    'SUCCESS': 'SUCCESS',
  },
  get values() {
    return Object.values(this.ENUM)
  },
})

const USER_ROLE = Object.freeze({
  ENUM: {
    'GUEST': 'GUEST',
    'ADMIN': 'ADMIN',
  },
  get values() {
    return Object.values(this.ENUM)
  },
})

const TOKEN = Object.freeze({
  ENUM: {
    'ACCESS_TOKEN': 'x-access-token',
    'REFRESH_TOKEN': 'x-refresh-token',
  },
  get values() {
    return Object.values(this.ENUM)
  },
})

export {
  RESPONSE_STATUS,
  USER_ROLE,
  TOKEN,
}
