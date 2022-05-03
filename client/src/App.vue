<template>
  <v-app id="app">
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>
  <v-card
    class="mx-auto"
    max-width="300"
    tile
  >

  </v-card>


      <v-spacer></v-spacer>
      

      <v-btn
        v-for="item in items" :key="item.tilte" :to="item.route" route
        text
      >
        <span class="mr-2">{{ item.title }}</span>
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
    
   <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      primary
    >
      <v-card-title class="primary">
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <div
          v-for="icon in icons"
          :key="icon.name"
          class="mx-4"
        >
          <a
          :href="icon.route"
          >
            <v-icon size="24px">
            {{ icon.name }}
          </v-icon>
          </a>
        </div>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    items:[
      {title:'Home',icon:'mdi-home',route:'/'},
      {title:'AddPost',icon:'mdi-note-plus',route:'/add-post'},
      {title:'About',icon:'mdi-receipt',route:'/about'}
    ],
    icons: [
        {name:'mdi-github',route:'https://github.com/ACCA86'},
        {name:'mdi-linkedin',route:'https://www.linkedin.com/in/ibrahim-abdldaim-650705170/'},
      ],
  }),
};
</script>
<style>
#app{background:#1E88E5;}
a{text-decoration:none;background:transparent;}
.theme--dark.v-btn.v-btn--has-bg{background:transparent;}
</style>