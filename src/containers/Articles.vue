<template>
    <div>
      <div class="section">
        <div class="container">
          <h1>Strapi blog</h1>
  
          <ArticlesList :articles="articles"></ArticlesList>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ArticlesList from "../components/ArticlesList.vue";
  import gql from "graphql-tag";
  
  export default {
      data() {
          return {
              articles: [],
            };
        },
        components: {
          ArticlesList,
        },
    apollo: {
      articles: gql`
        query Articles {
          articles {
            data {
              attributes {
                slug
                title
                category {
                  data {
                    attributes {
                      slug
                      name
                    }
                  }
                }
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      `,
    },
  };
  </script>
  
<style>

</style>