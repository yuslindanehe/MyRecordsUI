export default function ({ store, redirect }) {
  if (store.state.auth.loggedIn && !store.state.authentication2FA.authenticated2fa) {
    return redirect('/authentication2FA')
  }
}
