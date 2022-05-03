<template>
  <v-container>
    <v-row>
    <v-col v-for="(post,index) in posts" :key="post._id">
      <v-card :to="{name:'post',params:{id:post._id}}"
    :loading="loading"
    class="mx-auto my-12 col-md-4"
    max-width="374"
  >
    <strong class="blue--text text--darken-4 px-4" id="num">{{index+1}}</strong>
    <v-img
      :lazy-src="`/${post.image}`"
      height="250"
      class="my-4"
      :src="`/${post.image}`"
    ></v-img>
    <v-card-title>{{post.name}}</v-card-title>

    <v-card-text>
      <strong>{{ post.country }}</strong>
      <br><br>
      <h2>{{ post.company }}</h2>
      <br>
      <h3>{{ post.net_worth }}</h3>
      <div class="my-4 text-subtitle-1">
        {{post.content}}
      </div>
    </v-card-text>

  </v-card>
    </v-col>
  </v-row>
  </v-container>
</template>

<script>
import API from '../api'
export default {
  name: 'home',
  data(){
   return {
      posts:{},
   };
  },
  async created(){
    this.posts = await API.getPost();
  },
 
}
</script>
<style scoped>
p{font-size:34px;}
.v-card.v-sheet.theme--light{background:#42A5F5;}
#num{border:2px solid #09078f;background:#e8f3f5;border-radius:10px;}
</style>