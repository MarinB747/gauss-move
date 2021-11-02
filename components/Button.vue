<template>
  <button
    v-if="show"
    class="bg-gray-600 border-black border z-1 w-20 h-10 rounded-2xl text-white"
    v-on:click="setShow"
  >
    {{ buttonTxt }}
  </button>
  <button
    v-else
    class="
      bg-gray-600
      border-black border
      z-10
      w-20
      h-10
      rounded-2xl
      text-green-400
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
      this.$emit('button-clicked', this.show)
    },
  },
}
</script>
