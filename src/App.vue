<template>
  <div id="app">
    <h1>Remember the number</h1>
    <hr>
    <Form/>
    <myScript/>
  </div>
</template>
<script>
import myScript from '@/script.js'
import Form from '@/components/Form'
export default {
  name: 'App',
  components: {
    Form,
    myScript
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
