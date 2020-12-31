<template>
    <div id="nav">
      <div class="loggedUser">
        <p class="navText">SoyUnMesero</p>
        <button type="button" class="alarmButton">
          <img class="iconAlarm" alt="Order alarm" src="../assets/iconAlarm.png">
        </button>
      </div>
      <div class="logoDiv">
        <img class="logo" alt="App logo" src="../assets/logoBQ.png">
      </div>
      <div class="exitApp">
        <button type="button" class="exitAppButton">
          <span class="exitAppButtonText">Salir</span>
          <img class="iconLogout" alt="Logout App" src="../assets/iconWhiteLogout.png">
        </button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped lang="scss">
#nav {
  padding: 0px, 10px;
  display: flex;
  align-items: center;
  height: 80px;

  .loggedUser {
    width: 30%;
    margin-top: 35px;
    text-align: left;

    .navText {
      width: 120px;
      margin-left: 20px;
      display: inline-block;
    }

    .alarmButton {
      width: 35px;
      height: 35px;
      align-items: center;
      border-radius: 20px;
      background-color: white;

      .iconAlarm {
        width: 25px;
        height: 25px;
        margin-top: 3px;
        margin-left: -3px;
      }
    }
  }

  .logoDiv {
    width: 40%;
    align-self: center;

    .logo {
    width: 174px;
    height: 61px;
    }
  }

  .exitApp {
    width: 30%;
    position: relative;
    margin-top: -15px;

    .exitAppButton {
      width: 100px;
      height: 50px;
      position: absolute;
      right: 0;
      display: flex;
      align-items: center;
      background-color: transparent;
      border: none;
      color: white;

      .exitAppButtonText {
        margin-right: 10px;
        padding-left: 10px;
        font-size: 16px;
      }

      .iconLogout {
        width: 25px;
        height: 25px;
      }
    }
  }
}
</style>
