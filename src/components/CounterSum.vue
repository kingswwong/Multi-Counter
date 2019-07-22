<template>
  <div>
    <span>{{countSum}}</span>
  </div>
</template>

<script>
  export default {
    name: "CounterSum",
    computed: {
      countSum(){
        return this.$store.state.countSum
      }
    }
  }
</script>

<style scoped>

</style>
