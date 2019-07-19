<template>
  <div>
    <Counter v-for="n in count" @calculateToCounter="calculate"></Counter>
  </div>
</template>

<script>
  import Counter from './Counter'
  export default {
    name: "CounterGroup",
    components: {
      Counter
    },
    props:{
      count:Number
    },
    data() {
      return {
        counterSum: 0
      }
    },
    methods:{
      calculate(number){
        this.counterSum += number
        this.$emit('transmit',this.counterSum)
      }
    }
  }
</script>

<style scoped>

</style>
