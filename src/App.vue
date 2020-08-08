<template>
  <component class="app text-black" :is="pageLayout" :key="pageLayout" />
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import BasicLayout from '@/Layout/BasicLayout.vue'

import { auth, firestore } from './database/db'

@Component({
  name: 'App',
  components: {
    BasicLayout,
  },
})
export default class App extends Vue {
  get pageLayout() {
    const { meta } = this.$route
    return meta && meta.layout ? meta.layout : 'BasicLayout'
  }

  created() {
    auth.signInAnonymously()

    auth.onAuthStateChanged(async (user) => {
      if (user) {
        this.$store.dispatch('setUser', user.uid)
        this.$store.dispatch('bindUsers')
      }
    })
  }

  mounted() {}

  beforeDestroy() {}
}
</script>

<style lang="scss" scoped>
.app {
  min-height: 100vh;
}
</style>
