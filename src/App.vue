<template>
  <div id="app">
    <Nav />
    <router-view :key="$route.fullPath">Hi</router-view>
  </div>
</template>

<script>
import Nav from "@/components/OilNav.vue";

export default {
  name:"App",
  components:{ Nav }
}
</script>

<style>

</style>