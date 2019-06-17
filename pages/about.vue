<template>
  <div>about</div>
</template>

<script>
import TestPerimetr from '@/kindergarden/perimetr/TestPerimetr';

export default {
  methods: {
    async checkAuth() {
      console.log(this.$fireAuth.authState);
    }
  },
  perimeters: [
      TestPerimetr
    ],
  created() {
      // this.checkAuth();
      console.log(this.$bye.isAllowed('read'))
  }
};
</script>

<style>
</style>
