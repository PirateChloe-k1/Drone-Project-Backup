import request from '@/utils/request';
import { LoginParams, UserInfo, LogoutParams } from './type';

// 登录方法
export function login(username: string, password: string, code: string, captchaId: string, sId: string) {
  const data: LoginParams = {
    username,
    password,
    code,
    captchaId,
    sId,
  };
  return request({
    url: '/login',
    headers: {
      notToken: true
    },
    method: 'post',
    data: data
  });
}

// 退出方法
export function logout(data: LogoutParams) {
  return request({
    url: '/logout',
    method: 'post',
    data
  });
}

// 获取用户信息
export function getInfo(): Promise<UserInfo> {
  return request({
    url: "/getInfo",
    method: 'get'
  });
}

// 获取验证码
export function getCodeImg() {
  return request({
    url: '/advanceCaptchaImage',
    headers: {
      notToken: true
    },
    method: 'get',
  });
}
