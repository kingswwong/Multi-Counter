<template>
  <div>
    <Counter v-for="n in count" ></Counter>
  </div>
</template>

<script>
  import Counter from './Counter'
  export default {
    name: "CounterGroup",
    components: {
      Counter
    },
    computed:{
     count(){
       return this.$store.state.count
     }
    }
  }
</script>

<style scoped>

</style>
