<template>
    <div>
      <nav>
        <div class="left">
          <ul>
            <li>
              <a href="/">Oil</a>  <!--  /는 메인 페이지  -->
            </li>
          </ul>
        </div>
        <div class="right">
          <ul>
              <li v-for="category in categories.data" v-bind:key="category.id">
                  <router-link
                  :to="{ path: '/category/' + category.attribute.slug  }"
                  :key="category.attributes.slug">
                      {{ category.attributes.name }}
                  </router-link>
              </li>
          </ul>
        </div>
      </nav>
    </div>
  </template>
  
  <script>
  import gql from "graphql-tag";
  export default {
      name:"OilNav",
      data(){
          return{
              categories:[],
          };
      },
      apollo:{
          categories: gql` //GraphQL 쿼리의 응답으로 채워질 배열로 정의함
              query Categories {
                  categories {
                      data {
                          id
                          attributes{
                              slug
                              name
                          }
                      }
                  }
              }`,
      },
  };
  </script>
  
  <style></style>