<template>
  <v-app>
    <v-toolbar app dark color="primary">
      <v-toolbar-side-icon></v-toolbar-side-icon>
  
      <v-toolbar-title class="white--text">DoughSavers</v-toolbar-title>
  
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
