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
                <!--<ul v-for="b in breakfast" :key="b.id">
                  <li>
                    <button type="button" class="itemBtn" id="itemBtn"
                    @click="addToTabItemDescription()">-->
                      <!--<img class="iconImg" alt="Sandwich" src="../assets/iconSandwich.png">-->
                      <!--<div class="textBtn">
                        <h5>{{ b.description }}</h5>
                        <p>S/ {{ b.price }}.00</p>
                      </div>
                    </button>
                  </li>
                </ul>-->
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
            v-model="newOrderForm.name"
            placeholder="Nombre">
          </div>
          <!--<p>El nombre del cliente es: {{ newOrderForm.name }}</p>-->
          <div class="field">
            <div class="inputLabel">
              <label class="label">Mesa:</label>
            </div>
            <input type="number"
            id="clientTable"
            class="form-control"
            v-model.number="newOrderForm.table"
            placeholder="Número">
          </div>
          <!--<p>El número de la mesa es: {{ newOrderForm.table }}</p>-->
          <div class="orderList">
            <!--<ul>
              <li
                is="todo-item"
                v-for="(todo, index) in todos"
                v-bind:key="todo.id"
                v-bind:title="todo.title"
                v-on:remove="todos.splice(index, 1)"
              ></li>
            </ul>-->
            <!--<p class="item">{{ b.description }}</p>-->
            <p class="item">{{ displayItemDescriptionText }}</p>
          </div>
        </div>
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
    // breakfast: [],
    description: '',
    price: '',
    displayItemDescriptionText: '',
    newOrderForm: {
      name: '',
      table: '',
    },
  }),
  /*
  firestore: {
    breakfast: db.collection('breakfast'),
  },
  */
  methods: {
    /*
    print() {
      console.log('Soy un item de pedido');
    },
    */
    addToTabItemDescription() {
      // debugger;
      this.displayItemDescriptionText = 'Soy un item de pedido';
      // this.displayItemDescriptionText = this.description;
    },
    /*
    removeRow(b) {
      // console.log(row);
      this.breakfast.splice(b, 1);
      // this.items.splice(index, 1);
    },
    */
  },
  /*
  props: [
    'description',
    'price',
    // 'msg',
  ],
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
.menuHeader {
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
  margin-top: 20px;
  height: 480px;
}
/*
.notBold {
  font-family: Freestyle Script;
  font-weight:normal;
  font-size: 22px;
}
*/
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.itemBtn {
  width: 200px;
  height: 60px;
  margin-bottom: 15px;
  background-color: transparent;
  border: solid 2px white;
}
.textBtn {
  width: 78%;
  line-height: 0;
  text-align: center;
  display: inline-block;
  color: white;
}
/*
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
*/
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
.newOrderForm {
  margin: 20px;
  text-align: left;
  color: black;
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
  text-align: left;
  box-sizing: border-box;
  overflow-y: scroll;
  align-items: center;
  color: #131313;
}
.item {
  width: 170px;
  height: 20px;
  margin: 0;
  margin-top: 0px;
  text-align: left;
  font-size: 14px;
  color: #131313;
  // border: solid 1px  #131313;
}
/*
.costPerUnit,
.subTotal {
  width: 60px;
  height: 20px;
  margin: 0;
  padding-left: 10px;
  margin-top: 0px;
  font-size: 14px;
  // border: solid 1px  #131313;
}
.cant {
  width: 20px;
}
.totalText {
  width: 295px;
  font-weight: bold;
  font-size: 16px;
}
.total {
  width: 60px;
  font-weight: bold;
  font-size: 16px;
}
*/
</style>
