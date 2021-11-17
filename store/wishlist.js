export const state = () => ({
  list: [],
})

export const mutations = {
  initialiseStore() {
    let data = JSON.parse(localStorage.getItem('wishlist'))
    state.list = data
    console.log(state.list)
  },
  add(state, movie) {
    state.list.push({
      movie,
    }),
      localStorage.setItem('wishlist', JSON.stringify(state.list))
  },
  remove(state, { movie }) {
    state.list.splice(state.list.indexOf(movie), 1)
    localStorage.setItem('wishlist', JSON.stringify(state.list))
  },
}
