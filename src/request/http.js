import axios from 'axios';
import store from '@/store/index';
import handleError from '@/request/handleError';
import getAuthorizationHeader from '@/request/authorizationHeader';

const instance = axios.create({
  timeout: 5000,
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded',
    ...getAuthorizationHeader(),
  },
});

// request 攔截器
instance.interceptors.request.use(    
  config => {        
    // 每次發送請求之前判斷 vuex 中是否含有 token
    // 如果存在，則統一在 http 請求中的 header 都加上 token
    const token = store.state.token;        
    token && (config.headers.Authorization = token);        
    return config;    
  },    
  error => {        
    return Promise.error(error);    
  },
)

// response 攔截器
instance.interceptors.response.use(
  // 請求成功
  response => response.status === 200 ? Promise.resolve(response) : Promise.reject(response),
  // 請求失敗
  error => {
    const { response } = error;
    if (response) {
      handleError(response.status, response.data.message);
      return Promise.reject(response);
    }
    return Promise.reject(error);
  }
);

export default instance;