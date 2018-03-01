<template>
  <div>
    <p>The Home Page</p>
  </div>
</template>

<script>
  export default {
    head() {
      return {
        title: {
          inner: this.$route.name
        }
      }
    }
  }
</script>
