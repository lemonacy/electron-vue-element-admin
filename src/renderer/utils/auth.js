import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
var g_TokenValue = null

export function getToken () {
  if (process.env.NODE_ENV == 'production') {
    return g_TokenValue
  } else {
    return Cookies.get(TokenKey)
  }
}

export function setToken (token) {
  if (process.env.NODE_ENV == 'production') {
    g_TokenValue = token
  } else {
    Cookies.set(TokenKey, token)
  }
}

export function removeToken () {
  if (process.env.NODE_ENV == 'production') {
    g_TokenValue = null
  } else {
    Cookies.remove(TokenKey)
  }
}
