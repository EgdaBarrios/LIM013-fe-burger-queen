<template>
  <div class="pmMenu">
    <div class="header">
      <h3 class="title">RESTO DEL DIA</h3>
    </div>
    <div class="container">
      <div class="contentArea">
        <div class="subtitle">
          <h4><span class="notBold">Hamburguesas</span></h4>
        </div>
        <div class="sandwichList">
          <ul v-for="omh in otherMealsHamburgers" :key="omh.id">
            <li>
              <button type="button" class="itemBtn">
                <img class="iconImg" alt="Sandwich" src="../assets/iconHamburger.png">
                <div class="textBtn">
                  <h5>{{ omh.description }}</h5>
                  <p>S/ {{ omh.price }}.00</p>
                </div>
              </button>
            </li>
          </ul>
        </div>
        <div class="subtitle">
          <h4><span class="notBold">Acompañamientos</span></h4>
        </div>
        <div class="sandwichList">
          <ul v-for="oms in otherMealsSides" :key="oms.id">
            <li>
              <button type="button" class="itemBtn">
                <img class="iconImg" alt="Sandwich" src="../assets/iconFries.png">
                <div class="textBtn">
                  <h5>{{ oms.description }}</h5>
                  <p>S/ {{ oms.price }}.00</p>
                </div>
              </button>
            </li>
          </ul>
        </div>
        <div class="subtitle">
          <h4><span class="notBold">Bebidas</span></h4>
        </div>
        <div class="sandwichList">
          <ul v-for="omd in otherMealsDrinks" :key="omd.id">
            <li>
              <button type="button" class="itemBtn" v-on:click="cant +=1">
                <img class="iconImg" alt="Sandwich" src="../assets/iconBottle.png">
                <div class="textBtn">
                  <h5>{{ omd.description }}</h5>
                  <p>S/ {{ omd.price }}.00</p>
                </div>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from '../db';

export default {
  name: 'OtherMeals',
  data() {
    return {
      otherMealsHamburgers: [],
      otherMealsSides: [],
      otherMealsDrinks: [],
    };
  },

  firestore: {
    otherMealsHamburgers: db.collection('otherMealsHamburgers'),
    otherMealsSides: db.collection('otherMealsSides'),
    otherMealsDrinks: db.collection('otherMealsDrinks'),
  },
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

.container {
  width: 55%;
  height: 480px;
  text-align: left;
  margin-left: 20px;
  box-sizing: border-box;
  overflow-y: scroll;
}

.contentArea {
  height: 600px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.notBold {
  font-family: Freestyle Script;
  font-weight:normal;
  font-size: 22px;
}

.itemBtn {
  width: 95%;
  height: 60px;
  margin-bottom: 10px;
  background-color: transparent;
  border: solid 2px white;
}

.iconImg {
  width: 20%;
  height: 50px;
  padding: 0, 2px;
  vertical-align: top;
  display: inline-block;
  margin: 0;
  background-color: white;
}

.textBtn {
  width: 78%;
  line-height: 0;
  text-align: center;
  display: inline-block;
  color: white;
}
</style>
