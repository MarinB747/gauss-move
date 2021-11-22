export const state = () => ({
  user: '',
})
export const actions = {
  nuxtServerInit({ state }) {
    if (this.$cookies.get('User')) {
      const user = this.$cookies.get('User')
      state.user = user.name
    }
  },
}
export const mutations = {}
