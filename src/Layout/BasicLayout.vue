<template>
  <div>
    <Navigation />
    <router-view />
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

<style lang="scss"></style>
