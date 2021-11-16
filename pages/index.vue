<template>
  <div class="flex justify-center items-center h-screen">
    <h1>Movie API</h1>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.commit('wishlist/initialiseStore')
  },
}
</script>
