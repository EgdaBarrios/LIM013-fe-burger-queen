<template>
  <div class="main">
    <p class="menuDisplaySetting">Hola SoyUnMesero, hoy es {{ date }}, {{ time }}</p>
    <div class="container">
      <div class="leftC">
        <!--Práctica de componenetes-->
        <div class="menus">
          <!--<div class="menuDueToTime">
            <TimeMenu />
          </div>-->
          <!--Fin de práctica de componenetes-->
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
                        @click="addToTab(b); calculate()">
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
                    <!--<ul v-for="om in otherMeals" :key="om.id">
                      <li><MenuBtn v-bind:description="om.description"
                      v-bind:price="om.price"/></li>
                    </ul>-->
                    <ul>
                      <li v-for="om in otherMeals" :key="om.id">
                        <button type="button" class="itemBtn" id="itemBtn"
                        @click="addToTab(om); calculate()">
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
      </div>
      <div class="rightC">
        <div class="newOrderHeader">
          <h3 class="title">NUEVO PEDIDO</h3>
        </div>
        <form class="newOrderForm"
        id="newOrderForm">
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
            <div class="orderListLabel">
              <p class="itemDescription">Item</p>
              <p class="itemPrice">Costo/U</p>
              <p class="itemPrice">Cant.</p>
              <p class="itemPrice">Sub Total</p>
            </div>
            <ul v-if="newOrder.length">
              <li v-for="(no, index) in newOrder" :key="no.index">
                <p class="itemDescription">{{ no.description }}</p>
                <p class="itemPrice">S/ {{ no.price }}.00</p>
                <p class="itemPrice">{{ no.cant }}</p>
                <p class="itemPrice">S/ {{ no.subTotal }}.00</p>
                <p class="itemDelete"><button class="itemDeleteBtn"
                v-on:click= "removeRow(index)">
                </button></p>
              </li>
            </ul>
            <p class="noItemMessage" v-else>Aun no hay items que mostrar.</p>
            <div class="total">
              <p class="itemDescription">Total</p>
              <p class="itemPrice"></p>
              <p class="itemPrice"></p>
              <p class="itemPrice">S/{{ total }}.00</p>
            </div>
          </div>
          <div class="callToAction">
            <!--<button v-on:click= "sendOrderToKitchen">Enviar a cocina</button>-->
            <p><input class="sendToKitchenBtn" type="submit" value="Enviar a cocina"></p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable global-require */
/* eslint no-param-reassign: "error" */
// import MinusPlusInput from '@/components/MinusPlusInput.vue';
// import MenuBtn from '@/components/MenuBtn.vue';
// import CantBtn from '@/components/CantBtn.vue';
// import TimeMenu from '@/components/TimeMenu.vue';
// import eventBus from '../main';

export default {
  name: 'WaiterMainTwo',
  /*
  props: {
    value: {
      default: 1,
      type: Number,
    },
    min: {
      default: 0,
      type: Number,
    },
    max: {
      default: undefined,
      type: Number,
    },
  },
  */
  components: {
    // MinusPlusInput,
    // MenuBtn,
    // CantBtn,
    // TimeMenu,
  },
  data: () => ({
    date: new Date().toLocaleDateString('en-GB'),
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
    value: 1,
    // inputValue: {},
    newValue: 1,
    // value: 1,
    ip: 1,
    breakfast: [
      {
        image: require('../assets/menuIcon/iconSandwich.png'),
        description: 'Sandwich de jamón y queso',
        price: 10,
        cant: 1,
        subTotal: '',
      },
      {
        image: require('../assets/menuIcon/iconCup.png'),
        description: 'Café americano',
        price: 5,
        cant: 1,
        subTotal: '',
      },
      {
        image: require('../assets/menuIcon/iconCup.png'),
        description: 'Café con leche',
        price: 7,
        cant: 1,
        subTotal: '',
      },
      {
        image: require('../assets/menuIcon/iconJuice.png'),
        description: 'Jugo de frutas natural',
        price: 7,
        cant: 1,
        subTotal: '',
      },
    ],
    otherMeals: [
      {
        image: require('../assets/menuIcon/iconHamburger.png'),
        description: 'Hamburguesa simple',
        price: 10,
        cant: 1,
        subTotal: '',
      },
      {
        image: require('../assets/menuIcon/iconHamburger.png'),
        description: 'Hamburguesa doble',
        price: 15,
        cant: 1,
        subTotal: '',
      },
      {
        image: require('../assets/menuIcon/iconFries.png'),
        description: 'Papas fritas',
        price: 5,
        cant: 1,
        subTotal: '',
      },
      {
        image: require('../assets/menuIcon/iconFries.png'),
        description: 'Aros de cebolla',
        price: 5,
        cant: 1,
        subTotal: '',
      },
      {
        image: require('../assets/menuIcon/iconBottle.png'),
        description: 'Agua 500ml',
        price: 5,
        cant: 1,
        subTotal: '',
      },
      {
        image: require('../assets/menuIcon/iconBottle.png'),
        description: 'Agua 750ml',
        price: 7,
        cant: 1,
        subTotal: '',
      },
      {
        image: require('../assets/menuIcon/iconBottle.png'),
        description: 'Bebida/gaseosa 500ml',
        price: 7,
        cant: 1,
        subTotal: '',
      },
      {
        image: require('../assets/menuIcon/iconBottle.png'),
        description: 'Bebida/gaseosa 750ml',
        price: 10,
        cant: 1,
        subTotal: '',
      },
    ],
    newOrder: [],
    // cant: 1,
    total: 0,
    newOrderForm: {
      clientName: '',
      clientTable: '',
      newOrder: [],
    },
  }),
  methods: {
    addToTab(item) {
      console.log('Soy un item de pedido');
      this.newOrder.push(item);
      // this.newItem = '';
    },
    removeRow(index) {
      this.newOrder.splice(index, 1);
    },
    calculate() {
      this.total = 0;
      this.newOrder.forEach((no) => {
        no.subTotal = no.price * no.cant;
        this.total += no.subTotal;
      });
    },
    /*
    getInputValue(value) {
      console.log(value);
    },
    */
    /*
    getInputValue(value) {
      // console.log(value); // someValue
      this.inputValue = value;
      // console.log(value);
    },
    */
    /*
    inputValue(value) {
      // console.log(value); // someValue
      this.ip = value;
      console.log(value);
    },
    */
    /*
    mpplus() {
      if (this.max === undefined || (this.newValue < this.max)) {
        this.newValue += 1;
        this.$emit('input', this.newValue);
      }
    },
    mpminus() {
      if ((this.newValue) > this.min) {
        this.newValue -= 1;
        this.$emit('input', this.newValue);
      }
    },
    */
  },
  /*
  watch: {
    value() {
      eventBus.$emit('valueChanged', this.value);
    },
  },
  */
  /*
  watch: {
    value: {
      handler(newVal) {
        this.newValue = newVal;
      },
    },
  },
  created() {
    this.newValue = this.value;
  },
  */
  computed: {

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
.orderListLabel {
  margin-top: 50px;
  // font-weight: bold;
  font-family: Freestyle Script;
  font-size: 22px;
}
.orderList ul {
  list-style-type: none;
  // margin-top: 50px;
  padding: 0;
}
.orderList li {
  width: 100%;
}
.itemDescription {
  width: 49.5%;
  display: inline-block;
  margin: 0;
  padding-bottom: 5px;
}
.itemPrice {
  width: 15%;
  text-align: center;
  display: inline-block;
  margin: 0;
  padding-bottom: 5px;
}
.itemDelete {
  width: 5.5%;
  text-align: center;
  display: inline-block;
  margin: 0;
  padding-bottom: 5px;
}
.itemDeleteBtn {
  width: 100%;
  height: 25px;
  padding: 3px;
  color: white;
  background-image: url(../assets/deleteBtn.png);
  border: none;
  border-radius: 5px;
}
.noItemMessage {
  // margin-top: 50px;
  text-align: left;
  // background-color:  #CC9933;
}
.total {
  font-weight: bold;
}
.callToAction {
  text-align: center;
}
.sendToKitchenBtn {
  width: 50%;
  padding: 10px;
  font-family: Stencil;
  font-size: 14px;
  color: #131313;
  border: none;
  border-radius: 10px;
  background-color: #CC9933;
}
/*
.orderListTable {
  width: 100%;
  height: 480px;
  margin-top: 40px;
  text-align: center;
  box-sizing: border-box;
  overflow-y: scroll;
  align-items: center;
  color: #131313;
}
.left {
  text-align: left;
}
.orderTab {
  width: 100%;
}
.noItemMessage {
  margin: 0;
  text-align: left;
}
*/
// MinusPlusInput
/*
.minusplusnumber {
  border:1px solid silver;
  border-radius:5px;
  background-color: #FFF;
  margin:0 5px 0 5px;
  display:inline-block;
  user-select: none;
}
.minusplusnumber div {
  display:inline-block;
}
.minusplusnumber #field_container input {
  width:30px;
  text-align:center;
  font-size:15px;
  padding:3px;
  border:none;
}
.minusplusnumber .mpbtn {
  padding:3px 10px 3px 10px;
  cursor:pointer;
  border-radius:5px;
}
.minusplusnumber .mpbtn:hover {
  background-color:#DDD;
}
.minusplusnumber .mpbtn:active {
  background-color:#c5c5c5;
}
*/
/*
.bold {
  font-weight: bold;
  text-align: left;
}
*/
</style>
