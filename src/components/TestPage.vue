<template>
  <v-ons-page>
    <v-ons-toolbar class="home-toolbar">
      <div class="left">
        <v-ons-toolbar-button @click="$store.commit('splitter/toggle')">
          <v-ons-icon icon="ion-navicon, material:md-menu"></v-ons-icon>
        </v-ons-toolbar-button>
      </div>
      <div class="center">{{ msg }}</div>
    </v-ons-toolbar>
    <div class="content">
      Hello World
    </div>
  </v-ons-page>
</template>

<script>
export default {
  name: 'test-page',
  data () {
    return {
      msg: 'Test Page'
    }
  }
}
</script>
