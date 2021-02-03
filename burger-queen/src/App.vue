<template>
  <div id="app">
     <!--<div id="nav">
      <router-link class="topNav" to="/">Inicio</router-link> |
      <router-link class="topNav" to="/waiter">SoyUnMesero</router-link> |
      <router-link class="topNav" to="/waiterTwo">SoyUnMeseroDos</router-link> |
      <router-link class="topNav" to="/kitchen">SoyJefeDeCocina</router-link>
    </div>-->
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  width: 100%;
  height: auto;
  margin: 0 auto;
  max-width: 1920px;
  min-width: 360px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-image: url(assets/background.jpg);
  background-size: cover;
}

.topNav {
  font-size: 12px;
}

.topNav:link {
  color: rgb(186, 240, 245);
}

.topNav:visited {
  color: rgb(97, 186, 194);
}

.topNav:hover:active {
  color: rgb(106, 227, 238);
}
</style>
