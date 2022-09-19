<template>
  <div>
    <div>사진</div>
    <div>
      <div>
        <router-link to="/"> HOME </router-link>
      </div>
      <h1>Login. To. Recipe</h1>
      <p v-show="error">{errorMsg}</p>
      <form @submit="login">
        <div>
          <label for="">Email</label>
          <input type="email" v-model="email" />
        </div>
        <div>
          <label for="">Password</label>
          <input type="password" v-model="password" />
        </div>
        <button type="submit">Login</button>
        <p>
          <router-link to="/forgotpassword">비밀번호 찾기</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
    name: "Login",
  data() {
    return {
      email: '',
      password: '',
      error: false,
      errorMsg: `An error occurred, please try again`,
    };
  },
  methods: {
    async login(e) {
      e.preventDefault();
      try {
        const res = await this.axios.post(`http://localhost:1337/auth/local`,{
            identifier: this.email,
            password: this.password
        });
        const { jwt,user } = res.data
        window.localStorage.setItem('jwt',jwt)
        window.localStorage.setItem('userData', JSON.stringify(user))
        window.localStorage.setItem('bookmarks',JSON.stringify(user.bookmarks))
        this.$router.push('/')
      } catch (error) {
            this.error = true
            this.password = ''
      }
    },
  },
}
</script>

<style>

</style>