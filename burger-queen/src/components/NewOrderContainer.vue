<template>
  <div class="newOrder">
    <div class="empty"></div>
    <div class="newOrderTab">
      <p>Here's your check:</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewOrderContainer',
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

p {
  color: black;
}
</style>
