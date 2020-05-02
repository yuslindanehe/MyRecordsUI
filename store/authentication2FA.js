import authenticated2fa from '../middleware/authenticated2fa'

export const state = () => ({
  authenticated2fa: false
})

export const mutations = {
  setAuthenticate2FA (state, value) {
    state.authenticated2fa = value
  }
}
