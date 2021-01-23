<template>
  <div class="newOrder">
    <div class="empty"></div>
    <div class="newOrderTab">
      <div class="header">
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
        <div class="orderBody">
          <!--<Breakfast displayItemDescriptionText />-->
          <!--<ul v-for="b in breakfast" :key="b.id">
            <li><MenuBtn v-bind:description="b.description" v-bind:price="b.price"/></li>
          </ul>-->
          <!--<MenuBtn msg="Welcome to Your Vue.js App"/>-->
          <!--<p>Me ha pulsado {{ cant }} veces.</p>-->
          <!--<ul v-for="b in breakfast" :key="b.id">
            <li><MenuBtn v-bind:cant="b.cant"/></li>
          </ul>-->
          <!--<p><MenuBtn v-bind:cant="b.cant"/></p>-->
          <h5>Total</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Breakfast from '@/components/Breakfast.vue';
// import { db } from '../db';

export default {
  name: 'NewOrderContainer',
  components: {
    // Breakfast,
  },
  data: () => ({
    date: new Date().toLocaleDateString('en-GB'),
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
    newOrderForm: {
      name: '',
      table: '',
    },
    /*
    computed: {
      addToTab() {
        return this.cant + 1;
      },
    },
    */
    // breakfast: [],
    // cant: '',
  }),
  /*
  firestore: {
    breakfast: db.collection('breakfast'),
  },
  */
};
</script>

<style scoped>
.newOrder {
  width: 47.5%;
  height: 570px;
  margin-left: 10px;
  margin-right: 10px;
  vertical-align: top;
  display: inline-block;
  background-color: transparent;
}

.empty {
  width: 100%;
  height: 58px;
}

.newOrderTab {
  width: 100%;
  height: 540px;
  margin-left: 0px;
  margin-right: 12px;
  display: inline-block;
  border-radius: 10px;
  background-color: white;
}

.header {
  width: 100%;
  height: 60px;
  margin-top: -20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-image: url(../assets/background-orderHeader.png);
  background-size: cover;
}

.orderHeaderLeft,
.orderHeaderRight {
  width: 49%;
  margin-top: -20px;
  display: inline-block;
}

.date {
  font-size: 12px;
  text-align: right;
}

.orderNum {
  text-align: left;
}

.title {
  margin-left: 0px;
  padding: 20px;
  text-align: left;
  font-family: Stencil;
  color: #131313;
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
</style>
