<template>
    <div>
        <section>
            <div v-if="getSearchResults.length > 1">
                <h1>상세보기</h1>
                <div v-for="(item,i) in getSearchResults" :key="i">
                    <router-link to="/recipe/${item.recipe.label}">
                        <img src="{itme.recipe.image}">
                    </router-link>
                    <div>
                        <button @click="addItemToBookmark(item.recipe)">버튼  </button>
                    </div>
                    <router-link to="/recipe/${item.recipe.label}">
                        <h1>
                            {{item.recipe.label}}
                        </h1>
                    </router-link>
                    <div>
                        <p>
                            {{item.recipe.yield}} Servings|
                            {{item.recipe.ingredientLines.length}} ingredients
                        </p>
                        <p v-if="item.recipe.totalTime > 0 ">
                            {{item.recipe.totalTime}}
                        </p>
                    </div>
                </div>

            </div>
        </section>
    </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
    name:"searchResult",
    data(){
        return{
            bookamrks: JSON.parse(window.localStorage.getItem("bookmarks")),

        }
    },

    methods:{
        async addItemToBookmark(item){
            if(window.localStorage.getItem('userData')) {
                        const { 
                            label,
                            ingredientLines, 
                            totaltime, 
                            image, 
                            source, 
                            yeild: servings, 
                            url } = item
                        let bookmarkItem
                        if(this.bookmarks.findIndex(recipe => recipe.label === item.label) === -1){
                            bookmarkItem = {
                                label,
                                ingredientLines,
                                totaltime,
                                image,
                                url,
                                source,
                                servings,
                                users_permissions_user: JSON.parse(window.localStorage.getItem('userData')).id
                            }
                            this.bookmarks.push(bookmarkItem)
                            //set to localstorage
                            window.localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks))
                            await this.axios.post(`https://strapi-recipee-app.herokuapp.com/bookmarks`, {
                                ...bookmarkItem,
                            }, 
                            {
                                headers: {
                                    Authorization: `Bearer ${window.localStorage.getItem('jwt')}`,
                                },
                            })
                            const res = await this.axios.get(`http://localhost:1337/users/${bookmarkItem.users_permissions_user}`, {
                                headers: {
                                    Authorization: `Bearer ${window.localStorage.getItem('jwt')}`,
                                }
                            })
                            const user  = res.data
                            window.localStorage.setItem('userData', JSON.stringify(user))
                            window.localStorage.setItem('bookmarks', JSON.stringify(user.bookmarks))
                        }
                    } 
                }
            },
            computed: {
                ...mapGetters(['getSearchResults', 'getBookmarks'])
            }
 }
</script>

<style>

</style>