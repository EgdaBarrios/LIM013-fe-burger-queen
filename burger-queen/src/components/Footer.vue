<template>
  <div id="footer">
    <p class="footerText">@BurguerQueen 2020 | <span class="footerTextBold">
      Developer: Egda Barrios</span> | LIM013 Laboratoria
    </p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped lang="scss">
#footer {
  width: 90%;
  height: 30px;
  margin: auto;
  text-align: center;
  color: white;
  background-color: transparent;

  .footerText {
    margin-top: 10px;
    font-size: 14px;
  }

  .footerTextBold {
    font-weight: bold;
  }
}
</style>
