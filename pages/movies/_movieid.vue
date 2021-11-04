<template>
  <div class="flex justify-center items-center h-screen">
    <h1>{{ this.movie.title }}</h1>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'single-move',
  data() {
    return {
      movie: '',
    }
  },
  async fetch() {
    await this.getSingleMoive()
  },
  methods: {
    async getSingleMoive() {
      const data = axios.get(
        `https://api.themoviedb.org/3/movie/${this.$route.params.movieid}?api_key=f032274d9c9fd3adb40ade7cdc65485b&language=en-US`
      )
      const result = await data
      this.movie = result.data
      console.log(result.data)
    },
  },
}
</script>
