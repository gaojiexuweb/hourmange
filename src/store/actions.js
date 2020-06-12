export default {
    menuName({ commit }, data) {
        return commit('menuName', data)
    },
    loginSuccess({ commit }, data) {
        return commit('loginSuccess', data)
    },
    token({ commit }, data) {
        return token('menuName', data)
    }
}