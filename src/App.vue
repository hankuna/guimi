<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
#app{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
#header{
  height: 50px;
}
#section{
  flex: 1;
  overflow-y: scroll;
}
#footer{

}
</style>
