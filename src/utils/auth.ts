import Cookies from 'js-cookie'

const TokenKey = 'Admin-board-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token: string) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getUserInfo() {
	return localStorage.getItem('userInfo');
}

export function setUserInfo(userInfo:any) {
	localStorage.setItem('userInfo', userInfo);
}

export function removeUserInfo() {
	localStorage.removeItem('userInfo');
}