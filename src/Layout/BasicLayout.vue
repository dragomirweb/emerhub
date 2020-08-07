<template>
  <div>
    <nav> test</nav>
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({ name: 'BasicLayout', components: {} })
export default class extends Vue {}
</script>

<style></style>
