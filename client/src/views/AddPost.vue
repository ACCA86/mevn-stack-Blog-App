<template>
<v-container>
    <v-row>
        <v-col>
            <v-card>
                <v-card-title class="blue--text text--darken-4"><h2>Add New Post</h2></v-card-title>
                <v-divider></v-divider>
                <v-form ref="form" class="p-5 icon_items" @submit.prevent="submitForm"  enctype="multipart/form-data">
                <v-text-field class="mx-8 icon_items" label="Name" v-model="post.name" prepend-icon="mdi-account-circle" :rules="rules" outlined shaped solo></v-text-field>
                <v-text-field class="mx-8 icon_items" label="Net_Worth" v-model="post.net_worth" 
                prepend-icon="mdi-currency-usd" :rules="numberRule" 
                outlined shaped solo></v-text-field>
                <v-text-field class="mx-8 icon_items" label="Company" v-model="post.company" prepend-icon="mdi-sd" :rules="rules" outlined shaped solo></v-text-field>
                <v-text-field class="mx-8 icon_items" label="Country" v-model="post.country" prepend-icon="mdi-receipt" :rules="rules" outlined shaped solo></v-text-field>
                <v-textarea class="mx-8 icon_items" label="Content" v-model="post.content" prepend-icon="mdi-tooltip-text-outline" :rules="rules" outlined shaped solo></v-textarea>
                <v-file-input class="mx-8 icon_items" label="Select Image"  @change="selectFile"  prepend-icon="mdi-attachment" :rules="rules" solo></v-file-input>
                <v-btn class="mx-12 my-6" type="submit" color="success">Add</v-btn>
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
            rules:[(value)=>!!value||"This field is requried"],
            // numberRule: [v => (!isNaN(parseFloat(v)) && v >= 0 && v <= 999) || 'Number has to be between 0 and 999'],
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
    methods:{
        selectFile(file){
            this.image=file[0]
        },
        async submitForm(){
            const formData = new FormData;
            formData.append('name',this.post.name)
            formData.append('image',this.post.image)
            formData.append('net_worth',this.post.net_worth)
            formData.append('country',this.post.country)
            formData.append('company',this.post.company)
            formData.append('content',this.post.content)
            if(this.$refs.form.validate()){
                const response = await API.createPost(formData);
                this.$router.push({name:"home",params:{message:response.message}})
            }
        }
    },watch: {
  myValue(newVal){
    if(newVal === '') {
      this.myValue = null;
    }
  }
}
}
</script>
<style scoped>
.v-btn{width:100px;letter-spacing:2px;}
.v-input__append-outer .v-icon, .v-input__prepend-outer .v-icon,.theme--light.v-icon{color:#1e88e5}
.v-card.v-sheet.theme--light{background:#42A5F5;}
i{color:yellow;font-size:30px;}
</style>