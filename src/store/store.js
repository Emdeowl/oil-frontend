import { createStore } from "vuex";

export default createStore({
  state: {
    earchParam: "",
    searchResults: [],
    bookmarks: JSON.parse(window.localStorage.getItem("bookmarks")), // (*GET Rest API필요하다[bookmarks])
  },
  getters: {
    getSearchResults: (state) => state.searchResults,
    getSearchParam: (state) => state.searchParam,
    getBookmarks: (state) => {
      return state.bookmarks;
    }
  },
  actions: {
  async fetchSearchResult ({commit},searchItem){
    const res = await this.$axios.get(`https://api.edamam.com/search?q=${searchItem}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20`); 
    // (*GET API필요하다[감정분석 api사용?])
    const results = res.data.hits
    commit('updateSearchResults',results); //전달함수 , 전달인자
  },
  async fetchSeatchItem ({commit},item){
    commit('uodateSearchItem',item);
  }  
    },
    mutations:{
    updateSearchResults: (state,results) =>{
        state.searchResults = results
    },
    updateSearchItem: (state,item) =>{
        state.searchParam = item
    }
    }
});