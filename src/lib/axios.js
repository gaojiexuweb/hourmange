import axios from 'axios'
import { baseUrl } from '@/config'
class HttpRequest {
    constructor(baseUrl = baseUrl) {   //当没有传入baseUrl,设置默认值
        this.baseUrl = baseUrl;
        this.query = {}
    }
    getInsideConfig() {
        const config = {
            baseUrl: this.baseUrl,
            headers: {

            }
        }
        return config
    }

    // 拦截器
    interceptors(instance) {
        // 请求拦截器
        instance.interceptors.request.use(config => {
            // 添加全局loading。。。
            // Spin.show()
            return config
        }, error => {
            return Promise.reject(error)
        })

        // 响应拦截器
        instance.interceptors.response.use(res => {
            console.log(res)
            return res
        }, error => {
            return Promise.reject(error)
        })
    }
    request(options) {
        const instance = axios.create()
        options = Object.assign({}, this.getInsideConfig(), options)
        this.interceptors(instance)
        return instance(options)
    }
}

export default HttpRequest