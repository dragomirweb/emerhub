<template>
  <div class="container mx-auto">
    <h1 class="text-4xl font-bold mt-5"> Sync Form </h1>
    <SyncForm />
  </div>
</template>

<script>
import SyncForm from '@/components/SyncForm.vue';

export default {
  name: 'Home',
  components: {
    SyncForm,
  },
};
</script>
