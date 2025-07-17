import { ElMessage, ElMessageBox } from 'element-plus';
import axios from 'axios';
import { getToken } from './auth';
import { useUserStore } from '@/stores/index';

// 是否显示重新登录
export let isRelogin = { show: false };

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
})

// 请求拦截器
service.interceptors.request.use(config => {
  const notToken = (config.headers || {}).notToken === true;
  // 添加token
  if (getToken() && !notToken) {
    config.headers['Authorization'] = 'Bearer ' + getToken();
  }
  return config;
})

// 响应拦截器
service.interceptors.response.use(res => {
  const userStore = useUserStore();
  if (res.data.code) {
    const code = res.data.code;
    const msg = res.data.msg;
    if (code === 500) {
      ElMessage.error(msg);
      return Promise.reject(new Error(msg));
    } else if (code === 401) {
      if (!isRelogin.show) {
        isRelogin.show = true;
        ElMessageBox.confirm(
          '登录状态已过期，请重新登录',
          '登录提示',
          {
            confirmButtonText: '重新登录',
            cancelButtonText: '取消',
            type: 'warning',
          }
        )
        .then(() => {
          isRelogin.show = false;
          userStore.LogOut().then(() => {
            location.href = '/';
          });
        })
        .catch(() => {
          isRelogin.show = false;
        });
      }
      return Promise.reject(new Error('无效的会话，或者会话已过期，请重新登录。'));
    } else if (code !== 200 && typeof code !== 'string') {
      return Promise.reject(new Error('err'));
    } else {
      return res.data;
    }
  } else {
    return res.data;
  }
}, err => {
  let errMsg = err.message;
  if (errMsg == 'Network Error') {
    errMsg = '后端接口连接异常';
  }
  else if (errMsg.includes('timeout')) {
    errMsg = '系统接口请求超时';
  }
  else if (errMsg.includes('Request failed with status code')) {
    errMsg = '系统接口' + errMsg.substr(-3) + '异常';
  }
  ElMessage.error({
    message: errMsg,
    duration: 3000,
  });
  return Promise.reject(err);
})

export function authDownload(url:string, name:string) {
  axios({
    method: 'get',
    url: url,
    headers: {
      Authorization: getToken(),
    },
    responseType: 'blob',
  })
    .then(res => {
      if (res.data.type) {
        // 文件下载
        const blob = new Blob([res.data], {
          type: ''
        });
        let link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.setAttribute('download', name);
        link.click();
        // link = null;
        ElMessage.success('下载成功');
      } else {
        // 返回json
        ElMessage.warning(res.data.msg);
      }
    })
    .catch(() => { });

}

export default service;
