<template>
  <transition>
    <div
      class="
        h-screen
        w-40
        bg-green-400
        rounded-r-xl
        fixed
        z-20
        flex
        items-center
        flex-col
      "
      :value="modelValue"
      @show="$emit('update:modelValue', $event.target.value)"
    >
      <NuxtLink to="/movies">
        <Button class="relative m-5" buttonTxt="Movies" v-on="$listeners"
      /></NuxtLink>
      <NuxtLink to="/wishlist">
        <Button class="relative m-5" buttonTxt="Wishlist" v-on="$listeners" />
      </NuxtLink>
      <NuxtLink to="/"
        ><Button class="relative m-5" buttonTxt="Logout" v-on="$listeners"
      /></NuxtLink>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: { modelValue: Boolean },
}
</script>
