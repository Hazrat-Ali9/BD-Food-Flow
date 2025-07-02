/* eslint-disable @typescript-eslint/no-explicit-any */
import { authKey } from '../content/authKey'
import { decodedToken } from '../utils/jwt'
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from '../utils/local-storage'

export const storeUserInfo = (accessToken: string | undefined) => {
  if (!accessToken) {
    return // or handle the absence of accessToken accordingly
  }
  return setToLocalStorage(authKey, accessToken)
}

export const getUserinfo = () => {
  const authToken = getFromLocalStorage(authKey)
  //   console.log(accessToken)
  if (authToken) {
    const decodedData: any = decodedToken(authToken)
    // console.log(decodedData)
    return {
      ...decodedData,
      //   role: decodedData?.role.toLowerCase(),
    }
  }
}

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey)
  if (authToken) {
    return !!authToken
  }
}

export const removeUser = () => {
  return removeFromLocalStorage(authKey)
}
