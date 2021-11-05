<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <h1 class="text-xl">
      Woooops, seems like this page does not exsits. Please return back to:
    </h1>
    <NuxtLink to="/movies">
      <Button class="w-20 h-14" buttonTxt="Back to Movies" />
    </NuxtLink>
  </div>
</template>

<script>
export default {}
</script>
