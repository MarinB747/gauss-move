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
  </div>
</template>

<script>
export default {}
</script>
