import axios from 'axios';
import myconfig from '@/config.js'
// import useTokenStore from '../stores/token'
import router from '../router'
import { showLoadingToast, showToast, closeToast } from 'vant'


const service = axios.create({ baseURL: myconfig.baseURL })

// 请求拦截器
service.interceptors.request.use(config => {
    // const { token } = useTokenStore() // 添加了一个JWT令牌到请求头中。
    showLoadingToast({
        message: '加载中...',
        forbidClick: true,
        loadingType: 'spinner'
    })
    config.headers["X-LC-Id"] = myconfig.appid;
    config.headers["X-LC-Key"]=myconfig.appkey;
    // config.headers["X-LC-Key"] = myconfig.masterkey + ",master";
    // if (token) {
    //     config.headers["X-LC-Session"] = token
    //  放在sessionStorge 
    // }
    return config
})

// 响应拦截器
service.interceptors.response.use(
    response => {
        closeToast()
        // if (response.data.results)
        //     return response.data.results
        // else
            return response.data
        // const { errno, data, errmsg } = response.data
        // if (errno === 0) {
        //     if (errmsg !== '') {
        //         showToast({
        //             message: errmsg,
        //             type: 'success'
        //         })
        //     }
        //     return data || true
        // }
        // showToast({
        //     message: errmsg,
        //     type: 'error'
        // })
        // if (errno === 2) {
        //     router.push({ name: 'login' })
        // }
        // return false
    },
    error => {
        closeToast()
        showToast({
            message: '请求失败',
            type: 'fail'
        })
        console.log(error)
    }
)

export default service
