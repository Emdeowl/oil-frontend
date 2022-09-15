<template>
    <div>
      <div class="child">
        <div>
          <router-link
            v-for="article in leftArticles"
            :to="{ path: '/article/' + article.attributes.slug }"
            class="link-reset"
            :key="article.attributes.slug"
          >
            <div class="card">
              <div class="card-top">
                <img
                  :src="api_url + article.attributes.image.data.attributes.url"
                  alt=""
                  height="100"
                />
              </div>
              <div class="card-body">
                <p
                  id="category"
                  v-if="article.attributes.category"
                  class="text-uppercase"
                >
                  {{ article.attributes.category.data.attributes.name }}
                </p>
                <p id="title" class="text-large">
                  {{ article.attributes.title }}
                </p>
              </div>
            </div>
          </router-link>
        </div>
        <div>
          <div class="child">
            <router-link
              v-for="article in rightArticles"
              :to="{ path: '/article/' + article.attributes.slug }"
              class="link-reset"
              :key="article.attributes.slug"
            >
              <div class="card ">
                <div class="card-top">
                  <img
                    :src="api_url + article.attributes.image.data.attributes.url"
                    alt=""
                    height="100"
                  />
                </div>
                <div class="card-body">
                  <p
                    id="category"
                    v-if="article.attributes.category"
                    class="text-uppercase"
                  >
                    {{ article.attributes.category.data.attributes.name }}
                  </p>
                  <p id="title" class="text-large">
                    {{ article.attributes.title }}
                  </p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data: function () {
      return {
        api_url: process.env.VUE_APP_STRAPI_API_URL,
      };
    },
    props: {
      articles: Object,
    },
    computed: {
      leftArticlesCount() {
        return Math.ceil(this.articles.data.length / 5);
      },
      leftArticles() {
        return this.articles.data.slice(0, this.leftArticlesCount);
      },
      rightArticles() {
        return this.articles.data.slice(
          this.leftArticlesCount,
          this.articles.data.length
        );
      },
    },
  };
  </script>

  <style>

  </style>