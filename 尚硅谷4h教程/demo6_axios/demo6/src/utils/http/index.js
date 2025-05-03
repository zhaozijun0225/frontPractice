import axios from "axios";
import {message} from 'ant-design-vue';

const instance = axios.create({
    baseURL:'https://httpbin.org',
    timeout:5000,
    headers:{
        'X-Custom-Header':'foobar'
    }

})
instance.interceptors.request.use(config => {
    // 发送请求前做什么
    return config;
}, error => {
    console.log('请求错误',error);
    return Promise.reject(error);});


instance.interceptors.response.use(response => {
//     2xx的响应代码会进入此函数，
//     会对响应数据做点什么
    return response;
},error => {
    //     超出2xx的响应代码会进入此函数，
//     会对响应错误做点什么
    console.log('响应错误',error);
    message.error('服务器错误'+error.message);

    return Promise.reject(error);});

export default instance;