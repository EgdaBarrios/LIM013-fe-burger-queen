<template>
  <div class="amMenu">
    <div class="header">
      <h3 class="title">DESAYUNO</h3>
    </div>
    <div class="container">
      <div class="contentArea">
        <div class="subtitle">
          <h4><span class="notBold">Sandwiches</span></h4>
        </div>
        <div class="sandwichList">
          <ul v-for="bs in breakfastSandwiches" :key="bs.id">
            <li>
              <button type="button" class="itemBtn">
                <img class="iconImg" alt="Sandwich" src="../assets/iconSandwich.png">
                <div class="textBtn">
                  <h5>{{ bs.description }}</h5>
                  <p>S/ {{ bs.price }}.00</p>
                </div>
              </button>
            </li>
          </ul>
        </div>
        <div class="subtitle">
          <h4><span class="notBold">Bebidas Calientes</span></h4>
        </div>
        <div class="drinkList">
          <ul v-for="bhd in breakfastHotDrinks" :key="bhd.id">
            <li>
              <button type="button" class="itemBtn">
                <img class="iconImg" alt="Sandwich" src="../assets/iconCup.png">
                <div class="textBtn">
                  <h5>{{ bhd.description }}</h5>
                  <p>S/ {{ bhd.price }}.00</p>
                </div>
              </button>
            </li>
          </ul>
        </div>
        <div class="subtitle">
          <h4><span class="notBold">Bebidas Frías</span></h4>
        </div>
        <div class="drinkList">
          <ul v-for="bcd in breakfastColdDrinks" :key="bcd.id">
            <li>
              <button type="button" class="itemBtn">
                <img class="iconImg" alt="Sandwich" src="../assets/iconJuice.png">
                <div class="textBtn">
                  <h5>{{ bcd.description }}</h5>
                  <p>S/ {{ bcd.price }}.00</p>
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
  data() {
    return {
      breakfastSandwiches: [],
      breakfastHotDrinks: [],
      breakfastColdDrinks: [],
    };
  },

  firestore: {
    breakfastSandwiches: db.collection('breakfastSandwiches'),
    breakfastHotDrinks: db.collection('breakfastHotDrinks'),
    breakfastColdDrinks: db.collection('breakfastColdDrinks'),
  },
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

.container {
  width: 55%;
  height: 480px;
  text-align: left;
  margin-left: 20px;
  box-sizing: border-box;
  overflow-y: scroll;
}

.contentArea {
  height: 490px;
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
