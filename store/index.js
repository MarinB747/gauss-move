export const state = () => ({
  user: '',
})
export const actions = {
  nuxtServerInit({ dispatch }) {
    console.log('troololollo')
  },
}
export const mutations = {
  setUser(state) {
    const user = this.$cookies.get('User')
    console.log(user)
    state.user = user
  },
}
