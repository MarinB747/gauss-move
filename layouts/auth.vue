<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <img
      src="@/assets/images/hero_bg.jpg"
      alt="/"
      class="w-screen overflow-hidden"
    />
    <div class="z-10 absolute flex flex-col justify-center items-center">
      <h1 class="text-xl">Log In</h1>
      <form
        class="flex flex-col justify-center items-center"
        id="login"
        v-on:submit="checkForm"
      >
        <p>
          <label for="username"></label
          ><input
            class="w-48 m-2 border-4"
            id="username"
            v-model="username"
            type="text"
            name="username"
            placeholder="Username"
          />
        </p>
        <p>
          <label from="password"></label>
          <input
            class="w-48 m-2 border-4"
            id="password"
            v-model="password"
            type="password"
            name="password"
            placeholder="Password"
          />
        </p>
        <p class="text-white font-bold" v-if="error">
          This user does not exist
        </p>
        <input class="m-2" type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: false,
      username: '',
      password: '',
    }
  },
  methods: {
    checkForm(e) {
      e.preventDefault()
      if (this.username === 'user' && this.password === '12345') {
        this.$router.push('/movies')
      } else {
        this.error = true
      }
    },
  },
}
</script>
