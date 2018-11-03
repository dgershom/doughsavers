<template>
  <v-app>

    <v-navigation-drawer
      :clipped="clipped" 
      v-model="drawer" 
      enable-resize-watcher 
      app 
      dark
      class="green darken-4"
    > 
      <v-divider></v-divider>
      
      <v-list>
        <v-list-tile
          v-for="item in items"
          :key="item.title"
         
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
      fixed
      app 
      :clipped-left="clipped" 
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
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      drawer: true,
      clipped: true,
      users: [],
      items: [
        { title: 'Dashboard', icon: 'fa-adn' },
        { title: 'Account', icon: 'fa-list' },
        { title: 'Admin', icon: 'fa-edit' }
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
