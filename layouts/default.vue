<template>
  <div>
    <Header @show-sidebar="setShow" />
    <Sidebar v-show="show" />
    <Nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },

  methods: {
    setShow() {
      this.show = !this.show
    },
  },
}
</script>
