<template>
  <div>
    <Navigation />
    <div class="app-wrapper flex">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import Navigation from '@/components/Navigation.vue'

@Component({
  name: 'BasicLayout',
  components: {
    Navigation,
  },
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.app-wrapper {
  min-height: calc(100vh - 80px);
}
</style>
