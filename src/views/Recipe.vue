<template>
 <div>
    <Nav>

    </Nav>
 </div>
</template>

<script>
import Nav from '@/components/OilNav.vue'
import { mapGetters } from 'vuex';
export default {
    components:Nav,
    data(){
        return{
            name:this.$router.parms.id,
            curRecipe:{}
        }
    },
    computed: {
        ...mapGetters(['getSearchResults'])
    },
    created() {
        const recipeItem = this.getSearchResults.find(item => item.recipe.label === this.name)
         this.curRecipe = recipeItem.recipe
    }
}
</script>

<style>

</style>