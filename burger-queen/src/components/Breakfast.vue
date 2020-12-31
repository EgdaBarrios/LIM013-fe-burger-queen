<template>
  <div class="amMenu">
    <div class="header">
      <h3 class="title">DESAYUNO</h3>
    </div>
    It's time for breakfast!
  </div>
</template>

<script>
// import firebase from '../firebase/init';

export default {
  name: 'Breakfast',
};
</script>

<style scoped>
.amMenu {
  width: 100%;
  height: 480px;
  box-sizing: border-box;
}

.header {
  width: 100%;
  height: 60px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-image: url(../assets/background-breakfastHeader.png);
  background-size: cover;
}

.title {
  margin-left: 0px;
  padding: 20px;
  text-align: left;
  font-family: Stencil;
  color: #131313;
}
</style>
