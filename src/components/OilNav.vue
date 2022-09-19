<template>
  <div>
    <div>
      <h1>오늘의 일기</h1>
    </div>
    <div>
      <router-link to="/">HOME</router-link>
      <router-link to="/explore">Search</router-link>
      <router-link to="/register" v-if="!user">Sign up</router-link>
      <router-link to="/login" v-if="!user">Login</router-link>
      <router-link to="/boomarks" v-if="user">BookMark</router-link>
      <router-link to="" v-if="user">{{ user.username }}</router-link>
      <span @click="logout">
        <router-link to="" v-if="user">LOGOUT</router-link>
      </span>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
  name: "OilNav",
  data() {
    return {
      user: {},
    };
  },
  mounted() {
    // (*GET Rest API필요[UserData])
    this.user = JSON.parse(window.localStorage.getItem("userData"));
  },
  methods: {
    logout() {
      // (*DELETE Rest API필요[userData, bookmark, jwt token])
      window.localStorage.removeItem('jwt')
      window.localStorage.removeItem('userData')
      window.localStorage.removeItem('bookmarks')
      this.$router.push('/login')
    },
  },
};
</script>

<style></style>