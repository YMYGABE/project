import axios from 'axios'
import { ElMessage } from 'element-plus'
let request = axios.create({
    baseURL: import.meta.env.BASE_URL,
    timeout: 5000
})
request.interceptors.request.use((config) => {
    //必须要有config，不然连请求都发不出去
    return config
})

request.interceptors.response.use((response) => {
    return response.data
}, (error) => {
    let message = ''
    let status = error.response.status
    switch (status) {

        case 401:
            message = "TOKEN过期"
            break;
        case 403:
            message = "无权访问"
            break;
        case 404:
            message = "访问地址错误"
            break;
        case 500:
            message = "服务器故障"
            break;
        default:
            message = "网络错误"
            break;

    }
    ElMessage({
        type: 'error',
        message
    });
    return Promise.reject(error)
})

export default request;