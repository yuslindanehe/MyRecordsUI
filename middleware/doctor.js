export default function ({ store, redirect }) {
  if (store.state.auth.user.role == 'doctor') {
    return redirect('/MainPage')
  }
}
