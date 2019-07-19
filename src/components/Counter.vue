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
      },
      del(){
        this.value--;
      }
    }
  }
</script>

<style scoped>

</style>
