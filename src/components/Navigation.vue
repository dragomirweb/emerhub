<template>
  <nav class="app-navigation">
    <div class="container mx-auto navbar flex items-center justify-between">
      <div class="logo">Logo</div>
      <div class="menu">
        <span class="mx-3 ml-0 cursor-pointer"> Item 1 </span>
        <span class="mx-3 cursor-pointer"> Item 2 </span>
        <span class="mx-3 cursor-pointer"> Item 3 </span>
        <span class="mx-3 mr-0 cursor-pointer"> Item 4 </span>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({ name: 'Navigation' })
export default class extends Vue {}
</script>

<style lang="scss">
.app-navigation {
  @apply w-full;
  @apply bg-gray-400;
}

.navbar {
  height: 80px;
}
</style>
