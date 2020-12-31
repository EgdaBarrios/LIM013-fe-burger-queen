<template>
  <div class="main">
    <MenuContainer />
    <NewOrderContainer />
  </div>
</template>

<script>
import MenuContainer from './MenuContainer.vue';
import NewOrderContainer from './NewOrderContainer.vue';

export default {
  name: 'WaiterMain',
  components: {
    MenuContainer,
    NewOrderContainer,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main {
  width: 97%;
  height: 615px;
  margin: auto;
  box-sizing: border-box;
  //display: flex;
  //align-items: center;
  border: solid 2px #CC9933;
}
</style>
