<template>
  <div class="main">
    <p class="menuDisplaySetting">Hola SoyUnMesero, hoy es {{ date }}, {{ time }}</p>
    <div class="container">
      <div class="leftC">
        <div class="breakfastMenuItemList">
          <ul>
            <li v-for="b in breakfast" :key="b.id">
              <button class="btn btn-primary"
              @click="addToTab">{{ b.description }}</button>
            </li>
          </ul>
        </div>
      </div>
      <div class="rightC">
        <div class="newOrderTab">
          <ul v-if="newOrder.length">
            <li v-for="no in newOrder" :key="no.id">{{ no.description }}</li>
          </ul>
          <p v-else>Aun no hay items que mostrar.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WaiterMainTwo',
  data: () => ({
    date: new Date().toLocaleDateString('en-GB'),
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
    breakfast: [
      {
        description: 'Sandwich de jamón y queso',
        price: 10,
        // image: ,
        // purchased: false,
        // highPriority: false,
      },
      {
        description: 'Café americano',
        price: 5,
        // image: ,
      },
      {
        description: 'Café con leche',
        price: 7,
        // image: ,
      },
      {
        description: 'Jugo de frutas natural',
        price: 7,
        // image: ,
      },
    ],
    newOrder: [],
  }),
  methods: {
    addToTab() {
      console.log('Soy un item de pedido');
      this.newOrder.push({
        description: this.description,
        price: this.price,
      });
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
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.rightC {
  width: 49%;
  height: 540px;
  display: inline-block;
  border-radius: 10px;
  background-color:white;
  color: #131313;
}
.tab {
  color: red;
}
</style>
