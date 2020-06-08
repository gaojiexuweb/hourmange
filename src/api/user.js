import axios from './index'

function doRequest(url, data, method) {
    return axios.request({
        url,
        data,
        method,
    })
}
export default {
    abandonInfo(url, data, method) {
        return doRequest(url, data, method)
    }
}