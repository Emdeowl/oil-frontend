<template>
  <div>
    <Nav/>
    <section>
        <div>
            <form @submit="getRecipes">
                <input type="text" name="search" v-model="searcch" placeholder="Search Recipe">
                <button>검색 버튼</button>
            </form>

            <loading-progress v-if="loading"
                :progress="50"
                :indeterminate='true' 
                :counter-clockwise="true"
                :hide-background="false"
                size="50"
                rotate
                fillDuration="2"
                rotationDuration="1"
            />
        </div>
    </section>
    <SearchResults/>
  </div>
</template>

<script>
 import Nav from '@/components/OilNav.vue'
import SearchResults from '@/components/SearchResults.vue'
import { mapActions } from 'vuex'
export default {
    components: {
        Nav,
        SearchResults
    },
    data() {
         return {
            data : [],
            search: '',
            loading: false
                }
            },

    methods: {
        ...mapActions(['fetchSearchResult']),
        async getRecipes(e) {
            this.loading = true
            e.preventDefault()
            this.fetchSearchResult(this.search).then(result => {
                result;
                this.loading = false
            })
        }
    },
    filters: {
        capitalize(word) {
            return word.toUpperCase()
        }
    },
    async mounted() {}
        }
</script>

<style>

</style>