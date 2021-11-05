<template>
  <div
    class="
      flex flex-col
      justify-center
      items-center
      h-screen
      w-screen
      bg-green-400
    "
  >
    <img
      class="
        mt-20
        h-max
        absolute
        xl:mt-20 xl:opacity-100 xl:left-1
        2xl:mt-20 2xl:opacity-100 2xl:left-1
      "
      :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
      alt="/"
    />
    <img
      class="
        opacity-0
        z-1
        xl:mt-20 xl:h-max xl:absolute xl:right-1 xl:opacity-100
        2xl:mt-20 2xl:h-max 2xl:absolute 2xl:right-1: 2xl:opacity-100
      "
      :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
      alt="/"
    />
    <div
      class="
        w-72
        2xl:w-4/12
        flex flex-col
        justify-center
        items-center
        h-max
        rounded-lg
        absolute
        mt-20
        bg-green-400
      "
    >
      <h1 class="z-10 m-1 text-lg font-bold text-center">
        {{ this.movie.title }}
      </h1>

      <h2 class="z-10 mb-5 text-lg font-medium text-center">
        {{ this.movie.tagline }}
      </h2>
      <p
        class="
          z-10
          m-1
          mb-5
          text-center
          font-medium
          md:max-h-96
          lg:max-h-96
          xl:max-h-96
          2xl:max-h-96
          max-h-56
          overflow-auto
          scrollbar-hide
        "
      >
        {{ this.movie.overview }}
      </p>
      <span class="relative -left-20">{{ this.movie.runtime }} minutes</span>
      <span class="relative -left-9"
        >Released on: {{ this.movie.release_date }}</span
      >
    </div>
    <Button class="w-24 h-16 absolute bottom-5" buttonTxt="Add to Whishlist" />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      movie: '',
    }
  },
  head() {
    return {
      title: this.movie.title,
    }
  },
  watch: {
    '$route.query': '$fetch',
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
