import { get, post } from './index'

export const abandonInfo = (params) => {
    return post(`/api-auth/oauth/token`, params)
}