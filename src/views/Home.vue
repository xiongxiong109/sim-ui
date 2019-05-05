<template>
  <div class="home">
    <h4 class="title">Simple-UI-Components</h4>
    <ul class="list">
      <li v-for="item in navs" :key="item.to">
        <router-link :to="item.to" :key="item.to">{{item.nm}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      navs: [
        { to: '/simple_select', 'nm': '选择、步进器、计数器' }
      ]
    }
  }
}
</script>
<style scoped>
  .title {
    text-align: center;
    font-size: 16px;
    padding: 10px;
  }
  .list li {
    color: #333;
    border-bottom: 1px solid #ccc;
  }
  .list a {
    color: inherit;
    display: flex;
    align-items: center;
    padding: 0 10px;
    height: 44px;
    text-decoration: none;
  }
</style>
