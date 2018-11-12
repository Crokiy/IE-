<template>
  <div id="app">
    <Nav></Nav>
    <router-view/>
  </div>
</template>

<script>
import Nav from './base/Nav'
export default {
  name: 'App',
  components:{
    Nav
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  li{
    list-style: none;
  }
  [Width]{
    margin: 30px;
  }
  [FromBorder] {
  margin: 40px;
  border: 1px solid #aaa;
  padding: 20px;
}
</style>
