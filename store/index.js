export const state = () => ({
  user: '',
})
export const actions = {
  nuxtServerInit({ state }) {
    const user = this.$cookies.get('User')
    state.user = user.param1
  },
}
export const mutations = {}
