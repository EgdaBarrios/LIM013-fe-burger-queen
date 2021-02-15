<template>
  <div class="cantField">
    <div class="minusplusnumber">
      <div class="mpbtn minus"
      v-on:click="mpminus()">-</div>
      <div id="field_container">
        <input type="number" v-model="newValue" />
      </div>
      <div class="mpbtn plus"
      v-on:click="mpplus();
      $emit('getInputValue', newValue);
      $emit('getSubTotal')">+</div>
    </div>
  </div>
</template>

<script>
// import eventBus from '../main';

export default {
  name: 'MinusPlusInput',
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
    callBackFunction: {},
  },
  data() {
    return {
      newValue: 1,
      // selected: false,
      // valueFromEvent: 1,
    };
  },
  methods: {
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
  },
  watch: {
    value: {
      handler(newVal) {
        this.newValue = newVal;
      },
    },
  },
  created() {
    this.newValue = this.value;
    /*
    const vm = this;
    eventBus.$on('valueChanged', (payload) => {
      console.log('valueChanged', payload);
      vm.valueFromEvent = payload;
    });
    */
  },
};
</script>

<style scoped>
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
.active-btn {
  background-color: aquamarine;
}
</style>
