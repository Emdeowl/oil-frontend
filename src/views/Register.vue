<template>
  <div>
    <div>
      <router-link to="/"> HOME </router-link>
    </div>
    <h1>Sign up To. Join Recipe</h1>
    <p v-show="error">{{ errorMsg }}</p>
    <form @submit="register">
      <div>
        <label>Name</label>
        <input type="text" v-model="name" />
      </div>
      <div>
        <label>Email</label>
        <input type="email" v-model="email" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" v-model="password" />
      </div>
      <div>
        <label>UserName</label>
        <input type="text" v-model="username" />
      </div>

      <button type="submit"
        :disabled="name.length < 6 || password.length < 6 || username.length < 3"
        >
        <!-- :disabled 뒤에 조건이 만족하면 button이 비활성화 되는듯 -->

        <!-- 정규식 사용해서 조건 더 추가해야할 듯  -->
        Sign Up
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Register",
  datat() {
    return {
      name: "",
      email: "",
      password: "",
      username: "",
      error: false,
      errorMsg: `An Error occurred, please try again`,
    };
  },
  methods: {
    async register(e) {
      try {
        e.preventDrfault();
        await this.axios.post(`http://localhost:1337/auth/local/register`,{
            name:this.name,
            password: this.password,
            email:this.email,
            username:this.username
        })
        this.$router.push('login')
      } catch (e) {
        this.error = true
        this.email = ''
      }
    },
  },
}
</script>

<style>

</style>