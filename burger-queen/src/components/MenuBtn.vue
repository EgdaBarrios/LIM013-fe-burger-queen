<template>
  <div class="itemButton">
    <div id="btn">
      <button type="button" class="itemBtn" id="itemBtn"
      @click="addToTab(); cantItems()">
        <!--<img class="iconImg" alt="Sandwich" src="../assets/iconSandwich.png">-->
        <div class="textBtn">
          <img class="iconImg" alt="menuIcon" :src="image">
          <h5>{{ description }}</h5>
          <p>S/ {{ price }}.00</p>
        </div>
      </button>
    </div>
    <!--<div id="printOnClick">
      <div class="actionBtn" id="actionBtn">
        <p>{{ displayItemDescriptionText }}</p>
        <p>{{ displayItemPrice }}</p>
        <p>{{ cant }}</p>
        <p>S/ {{ subTotal }}.00</p>
        <button @click="removeRow()">Eliminar</button>
      </div>
    </div>-->
  </div>
</template>

<script>
export default {
  name: 'MenuBtn',
  data() {
    return {
      cant: 0,
      displayItemDescriptionText: '',
      displayItemPrice: '',
      newOrder: [],
      otherMeals: [],
    };
  },
  methods: {
    cantItems() {
      this.cant += 1;
    },
    addToTab(item) {
      console.log('Soy un item de pedido');
      this.newOrder.push(item.description, item.price);
      // this.newItem = '';
    },
    addToTabItemDescription() {
      // debugger;
      this.displayItemDescriptionText = this.description;
    },
    addToTabItemPrice() {
      this.displayItemPrice = `S/ ${this.price}.00`;
    },
    /*
    print() {
      console.log('Soy un item de pedido');
    },
    */
    /*
    removeRow() {
      // console.log(row);
      this.breakfast.splice(1);
      // this.items.splice(index, 1);
    },
    */
  },
  computed: {
    subTotal() {
      return parseInt(this.price, 10) * parseInt(this.cant, 10);
    },
  },
  props: [
    'description',
    'price',
    'image',
    // 'displayItemDescriptionText',
    // 'msg',
  ],
};
</script>

<style scoped>
.itemBtn {
  width: 200px;
  height: 60px;
  margin-bottom: 15px;
  background-color: transparent;
  border: solid 2px white;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.itemDescription,
.itemPrice {
  line-height: 0;
  text-align: center;
  color: white;
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
