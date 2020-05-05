export default function ({ store, redirect }) {
  if (store.state.auth.user.role == 'nurse') {
    return redirect('/MainPage')
  }
}
