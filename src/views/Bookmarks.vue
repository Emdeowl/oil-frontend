<template>
    <div>
        <Nav />
        <section>
            <div v-if="bookmarks.length > 0">
                <h1 >Bookmarks</h1>
                <div>
                    <div  v-for="(item, i) in bookmarks" :key="i">
                        <router-link :to='`/bookmark/${item.label}`'>사진자리</router-link>
                       
                        <div>
                            <button @click="removeItemFromBookmarks(item)">버튼</button>
                            <router-link :to='`/bookmark/${item.label}`'>
                                <h1>{{ item.label }}</h1>
                            </router-link>

                            <div>
                                <p>
                                    {{ item.servings }} Servings | {{ item.ingredientLines.length }} Ingredients
                                </p>
                                <p v-if="item.totalTime > 0">Minutes</p> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    // import { mapGetters } from 'vuex';
    import Nav from '@/components/LoginNav.vue'
    export default {
        components: {
            Nav
        },
        data() {
            return {
                bookmarks: []
            }
        },
        
        methods: {
            async removeItemFromBookmarks(item) {
                const itemIndex = this.bookmarks.findIndex(bookmarkItem => bookmarkItem.label === item.label)
                this.bookmarks.splice(itemIndex, 1)
                window.localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks))
                await this.axios.delete(`http://localhost:1337/bookmarks/${item.id}`, {
                    headers: {
                        Authorization: `Bearer ${window.localStorage.getItem('jwt')}`,
                    },
                })
            }
        },
        created() {
            this.bookmarks = JSON.parse(window.localStorage.getItem('bookmarks'))
        }
    }
</script>
<style scoped>
</style>