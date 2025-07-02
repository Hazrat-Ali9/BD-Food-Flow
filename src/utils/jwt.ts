import { jwtDecode } from 'jwt-decode'

export const decodedToken = (token: string) => {
  return jwtDecode(token)
}
