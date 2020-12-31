<template>
  <div class="pmMenu">
    <div class="header">
      <h3 class="title">RESTO DEL DIA</h3>
    </div>
    I love hamburgers!
  </div>
</template>

<script>
export default {
  name: 'OtherMeals',
};
</script>

<style scoped>
.pmMenu {
  width: 100%;
  height: 480px;
  box-sizing: border-box;
}

.header {
  width: 100%;
  height: 60px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-image: url(../assets/background-otherMealsHeader.png);
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
