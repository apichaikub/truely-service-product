import axios from 'axios'
import config from '../config'
import { TOKEN } from '../helper/enum'

/**
 * AuthService
 */
export default class AuthService {
  /**
   *
   * @param {String} accessToken
   * @param {String} refreshToken
   * @return { Object } response
   */
  verifyAuth(accessToken, refreshToken) {
    return axios({
      method: 'post',
      url: `${config.services.authorization}verify/auth`,
      headers: {
        [TOKEN.ENUM.ACCESS_TOKEN]: accessToken,
        [TOKEN.ENUM.REFRESH_TOKEN]: refreshToken,
      },
    })
  }
}
