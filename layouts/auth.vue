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
          <label for="username"
            ><input
              class="w-48 m-2 border-4"
              id="username"
              v-model="username"
              type="text"
              name="username"
              placeholder="Username"
            />
          </label>
        </p>
        <p>
          <label from="password">
            <input
              class="w-48 m-2 border-4"
              id="password"
              v-model="password"
              type="password"
              name="password"
              placeholder="Password"
            />
          </label>
        </p>
        <p class="text-white font-bold" v-if="error">
          Both fields must be filled out
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
      if (this.username === '' || this.password === '') {
        this.error = true
      } else {
        const cookieObj = { name: this.username, pass: this.password }
        this.$cookies.set('User', cookieObj)
        this.$store.state.user = cookieObj.name
        this.$router.push('/movies')
      }
    },
  },
}
</script>
