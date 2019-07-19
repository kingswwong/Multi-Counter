<template>
  <div>
    <input v-model.number="count" v-on:input="reset">
    <Counter v-for="n in count" @calculateToCounter="calculate"></Counter>
    <span>{{counterSum}}</span>
  </div>
</template>

<script>
  import Counter from './Counter'

  export default {
    name: "CounterGroup",
    components: {
      Counter
    },
    data() {
      return {
        count: 0,
        counterSum: 0
      }
    },
    methods:{
      calculate(number){
        this.counterSum += number
      },
      reset(){
        this.counterSum = 0
      }
    }
  }
</script>

<style scoped>

</style>
