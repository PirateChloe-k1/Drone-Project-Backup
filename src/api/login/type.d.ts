// 定义 Login 方法请求参数类型
export interface LoginParams {
    username: string;
    password: string;
    code: string;
    captchaId: string;
    sId: string;
}
  
// 定义 Logout 方法请求参数类型
export interface LogoutParams {
    token: string; 
}
  
// 定义 GetInfo 返回的响应类型
export interface UserInfo {
    username: string;
    email: string;
}
  