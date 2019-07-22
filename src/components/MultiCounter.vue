<template>
  <div>
    <input v-model.number="count">
    <CounterGroup ></CounterGroup>
    <CounterSum></CounterSum>
  </div>
</template>

<script>
  import CounterGroup from "@/components/CounterGroup";
  import CounterSum from "@/components/CounterSum";

  export default {
    name: "MultiCounter",
    components: {CounterSum, CounterGroup},
    computed:{
      count:{
        get () {
          return this.$store.state.count
        },
        set (value) {
          this.$store.commit('setCount', value)
        }
      }
    }
  }
</script>

<style scoped>

</style>
