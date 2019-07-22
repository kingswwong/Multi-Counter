<template>
  <div>
    <button @click="add">+</button>
    <span>{{value}}</span>
    <button @click="del">-</button>
  </div>
</template>

<script>
  export default {
    name: "Counter",
    data () {
      return {
        value: 0
      }
    },
    methods: {
      add(){
        this.value++;
        this.$store.commit('increment')
      },
      del(){
        this.value--;
        this.$store.commit('decrement')
      },
    }
  }
</script>

<style scoped>

</style>
