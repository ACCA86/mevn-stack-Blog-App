<template>
    <v-container>
        <v-row class="py-8">
            <v-col>
                <v-card>
                <v-img
                  :lazy-src="`/${post.image}`"
                  height="550"
                  width="1250"
                  :src="`/${post.image}`"
                ></v-img>
                <h1 class="mx-3">{{ post.name }}</h1>
                <h4 class="mx-4">{{ post.net_worth }}</h4>
                <v-card-title class="headline">{{ post.country }}</v-card-title>
                <v-card-text class="headline font-weight-bold">{{ post.company }}</v-card-text>
                <p class="mx-3 subheading font-weight-medium pa-3">{{ post.content }}</p>
                </v-card>
            </v-col>
            <v-col class="d-flex justify-end">
                <v-btn :to="{name:'edit',params:{id:post._id}}" :loading="loading" class="display-1 text-capitalize mx-2 font-weight-bold" color="blue darken-1"><span class="white-text">Edit</span></v-btn>
                <v-btn class="display-1 text-capitalize mx-2 font-weight-bold" @click="deletePost" color="red darken-1"><span class="white-text">Delete</span></v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import API from '../api'
export default {
    data(){
        return{
            post:[],
        }
    },
    async created(){
        this.post = await API.getSinglePost(this.$route.params.id)
    },
    methods:{
        async deletePost(){
            const response = await API.deletePost(this.$route.params.id)
            this.$router.push({name:'home',message:response.message})
        }
    }
}
</script>
<style>
span{color:white;}
button{padding:10px;}
</style>