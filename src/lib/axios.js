import axios from 'axios'
import { baseUrl } from '@/config'
class HttpRequest {
    constructor(baseUrl = baseUrl) {   //当没有传入baseUrl,设置默认值
        this.baseUrl = baseUrl;
        this.queue = {}
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
    interceptors(instance, url) {
        // 请求拦截器
        instance.interceptors.request.use(config => {
            // 添加全局loading。。。
            if (!Object.keys(this.queue).length) {
                // Spin.show()
            }
            this.queue[url] = true
            return config
        }, error => {
            return Promise.reject(error)
        })

        // 响应拦截器
        instance.interceptors.response.use(res => {
            delete this.queue[url]
            console.log(res)
            const { data, status } = res
            return { data, status }
        }, error => {
            delete this.queue[url]
            return Promise.reject(error)
        })
    }
    request(options) {
        const instance = axios.create()
        options = Object.assign({}, this.getInsideConfig(), options)
        this.interceptors(instance, options.url)
        return instance(options)
    }
}

export default HttpRequest