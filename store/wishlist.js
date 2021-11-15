export const state = () => ({
  list: [],
})

export const mutations = {
  add(state, movie) {
    state.list.push({
      movie,
    })
  },
  remove(state, { movie }) {
    state.list.splice(state.list.indexOf(movie), 1)
  },
}
