<template>
  <div>
    <section>
        <div> <!-- bg cover --> 
            <div>
                <div>
                    <div>
                        <h1> 
                            FIND THE
                            <br>
                            WORLD'S BEST
                            <br>
                            RECIPEE ONLINE
                        </h1>
                        <router-link to="/explore">
                            Search Recipes
                            <font-awesome-icon :icon="['fas','arrow-right']"/>                        
                        </router-link>
                    </div>
                    <div>
                        <img src="" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
    name:'HeroSection'
}
</script>

<style>

</style>