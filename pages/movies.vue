<template>
  <div class="flex flex-col">
    <div
      class="
        pt-48
        grid grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        xl:grid-cols-4
        2xl:grid-cols-5
        gap-4
      "
    >
      <div
        v-for="(movie, index) in movies"
        :key="index"
        class="flex justify-center items-center flex-col"
      >
        <div class="relative flex justify-center items-center flex-col w-64">
          <img
            :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
            alt="/"
          />
          <p
            class="
              bg-gray-700
              rounded-tr-full
              h-10
              w-16
              items-end
              flex
              justify-start
              pl-1
              text-white text-3xl
              relative
              -top-10
              -left-24
            "
          >
            {{ movie.vote_average }}
          </p>
          <p
            class="
              absolute
              w-64
              bg-green-400
              rounded-t-xl
              p-3
              text-white text-sm
              bottom-10
              transition-opacity
              duration-300
              ease-out
              opacity-0
              hover:opacity-100
              z-10
              max-h-96
              overflow-y-auto
              scrollbar-hide
            "
          >
            {{ movie.overview }}
          </p>
        </div>
        <div>
          <p class="relative font-extrabold -top-10">
            {{ movie.title.slice(0, 25)
            }}<span v-if="movie.title.length > 25">...</span>
          </p>
        </div>
        <NuxtLink :to="{ name: 'movieid', params: { movieid: movie.id } }">
          <Button class="relative -left-20 -top-10" buttonTxt="Details" />
        </NuxtLink>
      </div>
    </div>
    <div class="w-96 flex justify-center items-center">
      <button v-on:click="onPrev">
        <Button class="w-28 h-14 m-5 mb-24" buttonTxt="Previous" />
      </button>
      <button v-on:click="onNext">
        <Button class="w-28 h-14 m-5 mb-24" buttonTxt="Next" />
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      movies: [],
      page: 1,
    }
  },
  async fetch() {
    await this.getMovies()
  },

  methods: {
    async getMovies() {
      const data = axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=f032274d9c9fd3adb40ade7cdc65485b&language=en-US&page=${this.page}`
      )
      this.movies = []
      const result = await data
      result.data.results.forEach((movie) => {
        this.movies.push(movie)
      })
    },
    onNext() {
      this.page = this.page + 1
      this.getMovies()
      this.$router.push({ path: 'movies', query: { page: this.page } })
    },
    onPrev() {
      this.page = this.page - 1
      this.getMovies()
      this.$router.push({ path: 'movies', query: { page: this.page } })
    },
  },
}
</script>
