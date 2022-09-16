<template>
  <div>
    <div>
        <div>
            <h1>Recipee</h1>
        </div>
        <div @click="toggleMobileMenu">
            <font-awpsome-icon v-if="!mobileMenu" :icon="['fas', 'bars']" /> 
            <font-awpsome-icon v-if="mobileMenu" :icon="['fas', 'times']"/> 
        </div>
        <!-- desktop view -->
        <div>
            <router-link to="/">Home</router-link >
            <router-link to="/explore">SEARCH RECIPEE</router-link >
            <!-- router-link ="!user" -->
                <router-link to="/register" v-if="!user">SIGN UP</router-link >
                <router-link to="/login" v-if="!user">Login</router-link >
             <!-- router-link ="user" -->
                <router-link to="/bookmarks" v-if="user">
                    <font-awesome-icon :icon="['fas','bookmark']">BookMarks</font-awesome-icon>
                </router-link>
                <router-link to="" v-if="user">
                    <font-awesome-icon :icon="['fas','user-circle']"/>{{user.username}}
                </router-link>
                <span @click="logOut">
                    <router-link to="" v-if="user">LogOut</router-link>
                </span>
        </div>
        <!-- moblie view? -->
        <div v-if="mobileMenu">
            <router-link to="/">Home</router-link >
            <router-link to="/explore">SEARCH RECIPEE</router-link >
            <!-- router-link ="!user" -->
                <router-link to="/register" v-if="!user">SIGN UP</router-link >
                <router-link to="/login" v-if="!user">Login</router-link >
             <!-- router-link ="user" -->
                <router-link to="/bookmarks" v-if="user">
                    <font-awesome-icon :icon="['fas','bookmark']">BookMarks</font-awesome-icon>
                </router-link>
                <router-link to="" v-if="user">
                    <font-awesome-icon :icon="['fas','user-circle']"/>{{user.username}}
                </router-link>
                <span @click="logOut">
                    <router-link to="" v-if="user">LogOut</router-link>
                </span>
        </div>
    </div>
  </div>
</template>

<script>
    // import {mapGetters} from 'vuex'
export default {
    name:'LoginNav',

    data(){
        return{
            user:{},
            mobileMenu:false
        }
    },

    mounted(){
        this.user=JSON.parse(window.localStorage.getItem('userData'))
    },

    methods:{
        logOut(){
            window.localStorage.removeItem('jwt')
            window.localStorage.removeItem('userData')
            window.localStorage.removeItem('bookmakrs')
            this.$router.push('/login')
        },
        toggleMobileMenu(){
            this.mobileMenu = !this.mobileMenu
        }
    }
}
</script>

<style>

</style>