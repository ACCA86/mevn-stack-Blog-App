<template>
<v-container>
    <v-row>
        <v-col>
            <v-card>
                <v-card-title><h2 class="blue--text text--darken-4">Edit Post</h2></v-card-title>
                <v-divider></v-divider>
                <v-form ref="form" class="p-5" @submit.prevent="updateForm"  enctype="multipart/form-data">
                <v-text-field  class="mx-8" label="Name" v-model="post.name" prepend-icon="mdi-account-circle" outlined shaped solo></v-text-field>
                <v-text-field class="mx-8"  label="Net_Worth" v-model="post.net_worth" 
                prepend-icon="mdi-note" :rules="numberRule" 
                outlined shaped solo></v-text-field>
                <v-text-field class="mx-8"  label="Company" v-model="post.company" prepend-icon="mdi-sd" outlined shaped solo></v-text-field>
                <v-text-field class="mx-8"  label="Country" v-model="post.country" prepend-icon="mdi-receipt" outlined shaped solo></v-text-field>
                <v-textarea  class="mx-8" label="Content" v-model="post.content" prepend-icon="mdi-tooltip-text-outline" outlined shaped solo></v-textarea>
                <v-file-input class="mx-8"  @change="selectFile" prepend-icon="mdi-attachment" label="New Image" solo></v-file-input>
                <v-img  class="mx-12" :src="`/${post.image}`" width="120"></v-img>
                <v-btn class="mx-12 my-4"  type="submit" color="primary">Update</v-btn>
                </v-form>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>
<script>
import API from '../api'
export default {
    name:"AddPost",
    data(){
        return{
            post:{
                name:"",
                image:"",
                net_worth:"",
                country:"",
                company:"",
                content:"",
            },
            image:"",
            myValue: 1
        }
    },
    async created(){
      this.post = await API.getSinglePost(this.$route.params.id);
    }
    ,
    methods:{
        selectFile(file){
            this.image=file[0]
        },
        async updateForm(){
            const formData = new FormData;
            formData.append('name',this.post.name)
            formData.append('net_worth',this.post.net_worth)
            formData.append('country',this.post.country)
            formData.append('company',this.post.company)
            formData.append('content',this.post.content)
            formData.append('image',this.image)
            formData.append('img_old',this.post.image)
            if(this.$refs.form.validate()){
                const response = await API.updatePost(this.$route.params.id,formData);
                this.$router.push({name:"home",params:{message:response.message}})
            }
        }
    }
}
</script>
<style scoped>
.v-card.v-sheet.theme--light{background:#5fb6fd;}
</style>