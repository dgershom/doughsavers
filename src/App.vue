<template>
  <v-app>
    <v-toolbar app dark color="red darken-4">
      <v-toolbar-side-icon></v-toolbar-side-icon>
     
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
      //
    }
  }
}
</script>
