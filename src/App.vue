<template>
  <div id="app">
    <sm-button>hello</sm-button>
  </div>
</template>

<script>
// 手动放置到node_modules里去的, 需要package
import { SButton } from 'sim-ui-pack'
// import 'sim-ui-pack/SButton/style.css'

export default {
  name: 'app',
  components: {
    [SButton.name]: SButton
  }
}
</script>
