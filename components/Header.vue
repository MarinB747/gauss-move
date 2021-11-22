<template>
  <div
    class="
      h-40
      absolute
      w-full
      items-center
      justify-center
      flex
      overflow-hidden
    "
  >
    <img src="@/assets/images/hero_bg.jpg" alt="/" class="w-screen" />
    <Button class="absolute right-5" buttonTxt="Sidebar" v-on="$listeners" />
    <h1 class="absolute top-2 left-5 font-bold text-green-400">
      Welcome {{ user }}
    </h1>
    <span
      class="
        absolute
        left-5
        bg-green-400
        rounded-md
        flex
        items-center
        justify-center
      "
      >Movies in wishlist: {{ wishlist.length }}</span
    >
  </div>
</template>

<script>
export default {
  computed: {
    wishlist() {
      return this.$store.state.wishlist.list
    },
    user() {
      return this.$store.state.user
    },
  },
}
</script>
