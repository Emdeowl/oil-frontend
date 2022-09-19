<template>
  <div>
    <Nav/>
    <div>
        <div> 사진 </div>
        <h1>{{ name }}</h1>
    </div>
    <div>
        <p>
            {{ curRecipe.servings }} Servings
        </p>
        <p v-if="curRecipe.totalItem > 0">
            {{curRecipe.totalItem}} Minutes
        </p>
    </div>
    <div>
        <h1>{{ curRecipe.ingredientLines.length }} Ingredients</h1>
        <div>
            <div v-for="(Ingredients, i) in curRecipe.ingredientLines" :key="i">
                {{ Ingredients }}
            </div>
        </div>
    </div>
    <div>
        <p>{{ curRecipe.source }}</p>
        <p>
            <a href="`${curRecipe.url}`">Preparation Steps</a>
        </p>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/OilNav.vue'
// import { mapGetters } from 'vuex'
export default {
    components: {
               Nav
           },

    data() {
         return {
                    name: this.$route.params.id,
                    curRecipe: {},
                    bookmarkRecipes: JSON.parse(window.localStorage.getItem('bookmarks'))
                }
            },
    
    created() {
      const recipeItem =  this.bookmarkRecipes.find(item => item.label === this.name)
      this.curRecipe = recipeItem
            } 
}
</script>

<style>

</style>