<template>
  <component class="text-black" :is="pageLayout" :key="pageLayout" />
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import BasicLayout from '@/Layout/BasicLayout.vue'

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
}
</script>
