export const state = () => ({
  authenticated2fa: null
})

export const mutations = {
  setAuthenticate2FA (state, payload) {
    state.authenticated2fa = payload
  }
}

export const getters = {
  isAuthenticated2FA (state) {
    return state.authenticated2fa
  },
}
