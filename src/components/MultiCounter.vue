<template>
  <div>
    <input v-model.number="count" v-bind:oninput="reset">
    <CounterGroup :count="count" @transmit="getCountSum"></CounterGroup>
    <CounterSum :countSum="countSum"></CounterSum>
  </div>
</template>

<script>
  import CounterGroup from "@/components/CounterGroup";
  import CounterSum from "@/components/CounterSum";

  export default {
    name: "MultiCounter",
    components: {CounterSum, CounterGroup},
    data() {
      return {
        count: 0,
        countSum: 0
      }
    },
    methods: {
      getCountSum(countSum) {
        this.countSum = countSum
      },
      reset() {
        this.countSum = 0
      }
    }
  }
</script>

<style scoped>

</style>
