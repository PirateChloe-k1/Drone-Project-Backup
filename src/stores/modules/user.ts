import { defineStore } from 'pinia'
import { login, getInfo, logout } from "@/api/login"
import { LoginParams } from '@/api/login/type';
import { setToken, getToken, removeToken } from "@/utils/auth"
export const useUserStore = defineStore('user', {
  state: () => ({
    token: getToken(),
  }),
  actions: {
    Login(userInfo:LoginParams) {
      const username = userInfo.username.trim()
      const password = userInfo.password
      const code = userInfo.code
      const captchaId = userInfo.captchaId
      const sId = userInfo.sId
      return new Promise((resolve, reject) => {
        login(username, password, code, captchaId, sId).then((res:any) => {
          setToken(res.token)
          this.token = res.token
          resolve(res)
        })
          .catch(error => {
            reject(error)
          })
      })
    },
    GetInfo() {
      return new Promise((resolve, reject) => {
        getInfo().then((res:any) => {
          const user = res.user;
          console.log(user);
          resolve(res);
        }).catch(err => {
          reject(err)
        })
      })
    },
    LogOut() {
      return new Promise((resolve, reject) => {
        const params = { token:this.token as string }
        logout(params).then((res) => {
          this.token = ""
          removeToken()
          resolve(res)
        }).catch(err => {
          reject(err);
        })
      })
    }
  }
})
