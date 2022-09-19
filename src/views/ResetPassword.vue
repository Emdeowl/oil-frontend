<template>
    <div>
      <div>
        <router-link to="/login"> Login </router-link>
      </div>
      <h1>Recover Your. Recipee. Password</h1>
      <p v-show="error">An Error Occurred, Please Try Again</p>
      <form @submit="resetPassword">
        <div>
          <label for="">Password</label>
          <input type="password" v-model="password" />
        </div>
        <div>
          <label for="">Confirm Password</label>
          <input type="password" v-model="confirmPassword" />
        </div>
        <button
          type="submit"
          :disabled="password.length < 3 || password !== confirmPassword"
        >
          비밀번호 설정
        </button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "ResetPassword",
    data() {
      return {
        password: "",
        confirmPassword: "",
        done: false,
        error: false,
      };
    },
    methods: {
      async resetPassword(e) {
        e.preventDefault();
        this.axios.post(`http://localhost:1337/auth/reset-password`,{
          code: this.$route.query.code,
          password: this.password,
          passwordConfigmation: this.confirmPassword
        })
        .then(()=>{
          this.done = true
          this.$router.push("login")
        })
        .catch(e=>{
          e;
          this.error = true
        })
      },
    },
  };
  </script>
  
  <style></style>