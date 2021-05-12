import axios from "axios"
import qs from "qs"

const  service = axios.create({
    baseURL:'http://localhost:8000/',
    timeout: 5000
})
service.interceptors.request.use(config => {
    config.method === 'post'
        ? config.data = qs.stringify({...config.data})
        : config.params = {...config.params};
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    config.headers['Authorization'] = localStorage.getItem('uid') || '' ;
    return config;
}, error => {  //请求错误处理
    return Promise.reject(error)
})

service.interceptors.response.use(
    response => {  //成功请求到数据
        //这里根据后端提供的数据进行对应的处理
        return response.data;
    },
    error => {  //响应错误处理
        return Promise.reject(error)
    }
);
export default service;
