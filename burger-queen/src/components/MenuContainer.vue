<template>
  <div class="menu">
    <p class="menuDisplaySetting">Hola SoyUnMesero, hoy es {{ date }}, {{ time }}</p>
    <div class="menuDisplayedDueTime">
      <div class="breakfast" v-if="time > '12'">
        <Breakfast />
      </div>
      <div class="otherMeals" v-else>
        <OtherMeals />
      </div>
    </div>
  </div>
</template>

<script>
import Breakfast from './Breakfast.vue';
import OtherMeals from './OtherMeals.vue';
// import { all } from '../data/menu';

export default {
  name: 'MenuContainer',
  components: {
    Breakfast,
    OtherMeals,
  },
  data: () => ({
    date: new Date().toLocaleDateString('en-GB'),
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
  }),
};
</script>

<style scoped>
.menu {
  width: 47.5%;
  height: 570px;
  margin-left: 12px;
  margin-right: 10px;
  display: inline-block;
  background-color: transparent;
}

.menuDisplaySetting {
  width: 100%;
  height: 28px;
  text-align: left;
  margin: 15px;
  font-family: Freestyle Script;
  font-size: 24px;
}

.menuDisplayedDueTime {
  width: 100%;
  height: 540px;
  margin-left: 0px;
  margin-right: 10px;
  display: inline-block;
  border-radius: 10px;
  background-color: #131313;
}

.breakfast,
.otherMeals {
  margin-top: -20px;
}
</style>
