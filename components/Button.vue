<template>
  <button
    v-if="show"
    class="
      bg-transparent
      border-black border
      z-10
      w-20
      h-10
      rounded-2xl
      text-red-600
    "
    v-on:click="setShow"
  >
    {{ buttonTxt }}
  </button>
  <button
    v-else
    class="
      bg-transparent
      border-black border
      z-10
      w-20
      h-10
      rounded-2xl
      text-green-500
    "
    v-on:click="setShow"
  >
    {{ buttonTxt }}
  </button>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  props: ['buttonTxt'],
  methods: {
    setShow() {
      this.show = !this.show
      this.$emit('show-sidebar', this.show)
    },
  },
}
</script>
