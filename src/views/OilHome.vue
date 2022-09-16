<template>
  <div>
    <Nav>
        <HeroSection/>
        <FeaturedSection/>
    </Nav>
  </div>
</template>

<script>
import Nav from "@/components/OilNav.vue"
import HeroSection from "@/components/HeroSection.vue"
import FeaturedSection from "@/components/FeaturedSection.vue"
export default {
    name:'OliHome',
    components:{
        Nav,
        HeroSection,
        FeaturedSection
    }
}
</script>

<style>

</style>