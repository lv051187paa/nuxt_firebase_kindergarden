<template>
  <div>about</div>
</template>

<script>
export default {
  methods: {
    async checkAuth() {
      console.log(this.$fireAuth.authState);
    }
  },
  created() {
      this.checkAuth()
  }
};
</script>

<style>
</style>
