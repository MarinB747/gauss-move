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
        v-for="movie in movies"
        :key="movie.movie.id"
        class="flex justify-center items-center flex-col"
      >
        <div class="relative flex justify-center items-center flex-col w-64">
          <img
            :src="`https://image.tmdb.org/t/p/w500${movie.movie.poster_path}`"
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
            {{ movie.movie.vote_average }}
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
            {{ movie.movie.overview }}
          </p>
        </div>
        <div>
          <p class="relative font-extrabold -top-10">
            {{ movie.movie.title }}
          </p>
        </div>
        <NuxtLink
          :to="{ name: 'movieid', params: { movieid: movie.movie.id } }"
        >
          <Button class="relative -left-20 -top-10" buttonTxt="Details" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    movies() {
      return this.$store.state.wishlist.list
    },
  },
  mounted() {
    if (process.client) {
      return this.$store.commit('wishlist/initialiseStore')
    }
  },
  head() {
    return {
      title: 'Your Wishlist',
    }
  },
}
</script>
