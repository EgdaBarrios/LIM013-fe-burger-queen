<template>
  <div class="main">
    <p class="menuDisplaySetting">Hola SoyUnMesero, hoy es {{ date }}, {{ time }}</p>
    <div class="container">
      <div class="leftC">
        <!--<div class="breakfast" v-if="time > '12'">
          <div class="amMenu">
            <div class="header">
              <h3 class="title">DESAYUNO</h3>
            </div>
            <div class="mealContainer">
              <div class="contentArea">
                <div class="subtitle">
                  <h4><span class="notBold">Sandwiches</span></h4>
                </div>-->
                <button class="btn-primary" v-on:click="isHidden = !isHidden">
                  <template v-if="isHidden">Sandwich de jamón y queso</template>
                  <template v-else>Sandwich de jamón y queso</template>
                </button>
                <!--<div class="sandwichList">
                  <ul v-for="bs in breakfastSandwiches" :key="bs.id">
                    <li>
                      <button type="button" class="itemBtn" v-on:click="isHiddenBS = !isHiddenBS">
                        <template v-if="isHiddenBS">
                          <img class="iconImg" alt="Sandwich" src="../assets/iconSandwich.png">
                          <div class="textBtn">
                            <h5>{{ bs.description }}</h5>
                            <p>S/ {{ bs.price }}.00</p>
                          </div>
                        </template>
                        <template v-else>
                          <img class="iconImg" alt="Sandwich" src="../assets/iconSandwich.png">
                          <div class="textBtn">
                            <h5>{{ bs.description }}</h5>
                            <p>S/ {{ bs.price }}.00</p>
                          </div>
                        </template>
                      </button>
                    </li>
                  </ul>
                </div>-->
              <!--</div>
            </div>
          </div>
        </div>-->
      </div>
      <div class="rightC">
        <p v-if="!isHidden">Sandwich de jamón y queso</p>
        <!--<p v-if="!isHiddenBS">{{ bs.description }} S/ {{ bs.price }}.00</p>-->
      </div>
    </div>
  </div>
</template>

<script>
// import { db } from '../db';

export default {
  name: 'WaiterMainTwo',
  data: () => ({
    date: new Date().toLocaleDateString('en-GB'),
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
    // breakfastSandwiches: [],
    isHidden: true,
  }),
  /*
  firestore: {
    breakfastSandwiches: db.collection('breakfastSandwiches'),
    // breakfastHotDrinks: db.collection('breakfastHotDrinks'),
    // breakfastColdDrinks: db.collection('breakfastColdDrinks'),
  },
  */
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
.menuDisplaySetting {
  width: 100%;
  height: 28px;
  text-align: left;
  margin: 15px;
  font-family: Freestyle Script;
  font-size: 24px;
}
.container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 15px;
  padding-top: 0px;
  background-color: transparent;
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.leftC {
  width: 49%;
  height: 540px;
  display: inline-block;
  border-radius: 10px;
  background-color: #131313;
}
.breakfast,
.otherMeals {
  margin-top: -20px;
}
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
.mealContainer {
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
.notBold {
  font-family: Freestyle Script;
  font-weight:normal;
  font-size: 22px;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
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
.rightC {
  width: 49%;
  height: 540px;
  display: inline-block;
  border-radius: 10px;
  background-color:white;
}
</style>
