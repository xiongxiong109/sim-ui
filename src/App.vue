<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <sm-button>hello</sm-button>
  </div>
</template>

<script>
// 手动放置到node_modules里去的, 需要package
import SButton from 'sim-ui-pack/SButton'
import 'sim-ui-pack/SButton/style.css'

export default {
  name: 'app',
  components: {
    [SButton.name]: SButton
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
