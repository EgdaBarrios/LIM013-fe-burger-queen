<template>
  <div class="main">
    <p class="menuDisplaySetting">Hola SoyUnMesero, hoy es {{ date }}, {{ time }}</p>
    <div class="container">
      <div class="leftC">
        <div class="breakfast" v-if="time < '12'">
          <div class="amMenu">
            <div class="menuHeader">
              <h3 class="title">DESAYUNO</h3>
            </div>
            <div class="mealContainer">
              <div class="contentArea">
                <div class="breakfastMenuItemList">
                  <ul>
                    <li v-for="b in breakfast" :key="b.id">
                      <button type="button" class="itemBtn" id="itemBtn"
                      @click="addToTab(b)">
                        <img class="iconImg" alt="menuIcon"
                        :src="b.image">
                        <div class="textBtn">
                          <h5>{{ b.description }}</h5>
                          <p>S/ {{ b.price }}.00</p>
                        </div>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="otherMeals" v-else>
          <div class="pmMenu">
            <div class="pmMenuHeader">
              <h3 class="title">RESTO DEL DIA</h3>
            </div>
            <div class="mealContainer">
              <div class="contentArea">
                <div class="otherMealsMenuItemList">
                  <ul>
                    <li v-for="om in otherMeals" :key="om.id">
                      <button type="button" class="itemBtn" id="itemBtn"
                      @click="addToTab(om)">
                        <img class="iconImg" alt="menuIcon"
                        :src="om.image">
                        <div class="textBtn">
                          <h5>{{ om.description }}</h5>
                          <p>S/ {{ om.price }}.00</p>
                        </div>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="rightC">
        <div class="newOrderHeader">
          <h3 class="title">NUEVO PEDIDO</h3>
        </div>
        <div class="newOrderForm">
          <div class="orderHeaderLeft">
            <h3 class="orderNum">P000001</h3>
          </div>
          <div class="orderHeaderRight">
            <p class="date">{{ date }}, {{ time }}</p>
          </div>
          <div class="field">
            <div class="inputLabel">
              <label class="label">Cliente:</label>
            </div>
            <input type="text"
            id="clientName"
            class="form-control"
            v-model="newOrderForm.clientName"
            placeholder="Nombre">
          </div>
          <div class="field">
            <div class="inputLabel">
              <label class="label">Mesa:</label>
            </div>
            <input type="number"
            id="clientTable"
            class="form-control"
            v-model.number="newOrderForm.clientTable"
            placeholder="Número">
          </div>
          <div class="orderList">
            <ul v-if="newOrder.length">
              <li v-for="no in newOrder" :key="no.id">
                <!--<table class="orderListTab">
                  <tr>
                    <th>Item</th>
                    <th>Costo Unitario</th>
                    <th>Cant.</th>
                    <th>Sub-total</th>
                  </tr>
                  <tr>
                    <td>{{ no.description }}</td>
                    <td>{{ no.price }}</td>
                    <td>50</td>
                    <td>50</td>
                  </tr>
                </table>-->
              </li>
            </ul>
            <p v-else>Aun no hay items que mostrar.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable global-require */
export default {
  name: 'WaiterMainTwo',
  data: () => ({
    date: new Date().toLocaleDateString('en-GB'),
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
    breakfast: [
      {
        description: 'Sandwich de jamón y queso',
        price: 10,
        image: require('../assets/menuIcon/iconSandwich.png'),
        // purchased: false,
        // highPriority: false,
      },
      {
        description: 'Café americano',
        price: 5,
        image: require('../assets/menuIcon/iconCup.png'),
      },
      {
        description: 'Café con leche',
        price: 7,
        image: require('../assets/menuIcon/iconCup.png'),
      },
      {
        description: 'Jugo de frutas natural',
        price: 7,
        image: require('../assets/menuIcon/iconJuice.png'),
      },
    ],
    otherMeals: [
      {
        description: 'Hamburguesa simple',
        price: 10,
        image: require('../assets/menuIcon/iconHamburger.png'),
        // purchased: false,
        // highPriority: false,
      },
      {
        description: 'Hamburguesa doble',
        price: 15,
        image: require('../assets/menuIcon/iconHamburger.png'),
      },
      {
        description: 'Papas fritas',
        price: 5,
        image: require('../assets/menuIcon/iconFries.png'),
      },
      {
        description: 'Aros de cebolla',
        price: 5,
        image: require('../assets/menuIcon/iconFries.png'),
      },
      {
        description: 'Agua 500ml',
        price: 5,
        image: require('../assets/menuIcon/iconBottle.png'),
      },
      {
        description: 'Agua 750ml',
        price: 7,
        image: require('../assets/menuIcon/iconBottle.png'),
      },
      {
        description: 'Bebida/gaseosa 500ml',
        price: 7,
        image: require('../assets/menuIcon/iconBottle.png'),
      },
      {
        description: 'Bebida/gaseosa 750ml',
        price: 10,
        image: require('../assets/menuIcon/iconBottle.png'),
      },
    ],
    newOrder: [],
    newOrderForm: {
      clientName: '',
      clientTable: '',
      newOrder: [],
    },
  }),
  methods: {
    addToTab(item) {
      console.log('Soy un item de pedido de desayuno');
      this.newOrder.push(item);
      // this.newItem = '';
    },
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
.amMenu,
.pmMenu {
  width: 100%;
  height: 480px;
  box-sizing: border-box;
}
.menuHeader {
  width: 100%;
  height: 60px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-image: url(../assets/background-breakfastHeader.png);
  background-size: cover;
}
.pmMenuHeader {
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
.mealContainer {
  width: 55%;
  height: 480px;
  text-align: left;
  margin-left: 20px;
  box-sizing: border-box;
  overflow-y: scroll;
}
.contentArea {
  margin-top: 20px;
  height: 480px;
}
.breakfastMenuItemList ul,
.otherMealsMenuItemList ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.itemBtn {
  width: 95%;
  height: 60px;
  margin-bottom: 15px;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
  color: #131313;
}
.newOrderHeader {
  width: 100%;
  height: 60px;
  margin-top: -20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-image: url(../assets/background-orderHeader.png);
  background-size: cover;
}
.newOrderForm {
  height: 480px;
  margin: 20px;
  text-align: left;
  color: #131313;
}
.orderHeaderLeft,
.orderHeaderRight {
  width: 49%;
  margin-top: -20px;
  display: inline-block;
}
.orderNum {
  text-align: left;
}
.date {
  font-size: 12px;
  text-align: right;
}
.field {
  margin-bottom: 10px;
}
.inputLabel {
  width: 50px;
  display: inline-block;
}
.label {
  margin-bottom: 5px;
  font-family: Freestyle Script;
  font-size: 22px;
}
.orderList {
  width: 100%;
  height: 480px;
  margin-top: 20px;
  text-align: left;
  box-sizing: border-box;
  overflow-y: scroll;
  align-items: center;
  color: #131313;
}
.orderList ul {
  margin-top: 20px;
  margin: 0;
  padding: 0;
  list-style-type: none;
}
</style>
