<template>
  <div class="menuDueTime">
    <div class="amMenu">
      <div class="menuHeader">
        <h3 class="title">DESAYUNO</h3>
      </div>
      <div class="mealContainer">
        <div class="contentArea">
          <div class="breakfastMenuItemList">
            <button type="button" class="itemBtn" id="itemBtn"
            @click="addToTab()">
              <img class="iconImg" alt="menuIcon"
              :src="image">
              <div class="textBtn">
                <h5>{{ description }}</h5>
                <p>S/ {{ price }}.00</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimeMenu',
  props: ['name'],
};
</script>
<!--Práctica de componenetes HTML padre
  <div class="menus">
    <div class="menuDueToTime">
      <TimeMenu />
    </div>
Fin de práctica de componenetes-->
<style scoped>
</style>
