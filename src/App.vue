<template>
  <v-app>

    <router-link :to="{ name: '' }">Home</router-link>
    <router-link to="/deals">Deals</router-link>
    <router-link to="/search">Search</router-link>

    <v-navigation-drawer 
      v-model="drawer" 
      enable-resize-watcher 
      app 
      dark
      width="200"
      class="green darken-4"
    > 
      <v-divider></v-divider>
      
      <v-list>
        <v-list-tile 
          v-for="item in items"
          :key="item.title"
          :to="item.link" className="rlink"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
  
          <v-list-tile-content>           
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar       
      app 
      dark 
      color="red darken-4"
      >

      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
     
      <v-flex xs12>
        <v-img
          :src="require('./assets/trademark.png')"
          class="my-3"
          contain
          max-height="70"
        ></v-img>
      </v-flex>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>fa-search</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      drawer: true,
      users: [],
      items: [
        { title: 'Home', icon: 'fa-home', link: '/' },
        { title: 'Search', icon: 'fa-search', link: '/search' },
        { title: 'Deals', icon: 'fa-dollar', link: '/deals' }
      ]
    }
  },
  methods: {

  },
  create: function() {
    console.log('created ran...');
    this.$http.get('https://jsonplaceholder.typicode.com/users')
      .then(function(response){
        console.log(response.data);
        this.users=response.data;
      });
  }   
  
}
</script>

<style lang="scss">
  .rlink {
    color: yellow;
    hover: red;
  }
</style>
