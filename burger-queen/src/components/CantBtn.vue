<template>
  <div class="cantButton">
    <button @click="cant++">{{ cant }}</button>
  </div>
</template>

<script>
export default {
  name: 'CantBtn',
  data() {
    return {
      cant: 1,
    };
  },
};
</script>

<style scoped>
</style>
