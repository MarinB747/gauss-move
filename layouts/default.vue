<template>
  <div>
    <Header @button-clicked="setShow" />
    <transition
      enter-class="transform -translate-x-48 duration-500"
      enter-to-class="transform translate-x-0	duration-500"
      leave-class="transform translate-x-0	duration-500"
      leave-to-class="transform -translate-x-48	duration-500"
    >
      <Sidebar v-show="show" v-model="show" @button-clicked="setShow" />
    </transition>
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
