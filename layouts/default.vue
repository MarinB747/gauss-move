<template>
  <div>
    <Header @button-clicked="setShow" />
    <Sidebar v-show="show" v-model="show" @button-clicked="setShow" />
    <Nuxt keep-alive />
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
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

  methods: {
    setShow() {
      this.show = !this.show
    },
  },
}
</script>
