export default function ({ store, redirect }) {
  if (store.state.auth.user.role == 'patient') {
    return redirect('/MainPage')
  }
}
