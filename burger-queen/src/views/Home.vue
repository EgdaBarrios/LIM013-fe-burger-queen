<template>
  <div class="home">
    <div class="homeMain">
      <img class="logo" alt="App logo" src="../assets/logoBQ.png">
      <h1 class="welcome">Bienvenid@ a tu aplicación Burger Queen</h1>
      <div class="container">
        <div class="textContainer">
          <p class="mainText">Proyecto en desarrollo, iniciado durante el bootcamp y construido
          con el framework progresivo Javascript Vue. Consiste en una Single Page App con interfaz
          en la que se pueden tomar los pedidos de un pequeño restaurante usando una tablet,
          y enviarlos a la cocina para ser preparados.</p>
          <p class="separator">&#9679; &#9679; &#9679;</p>
          <div class="icons">
            <button type="button" class="linkedinButton">
              <img class="iconLinkedin" alt="LinkedIn profile" src="../assets/iconLinkedin.png">
            </button>
            <button type="button" class="githubButton">
              <img class="iconGithub" alt="GitHub repository" src="../assets/iconGithub.png">
            </button>
          </div>
        </div>
        <div class="formContainer">
          <Register />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Register from '@/components/Register.vue';
import Footer from '@/components/Footer.vue';
// import db from '@/firebase/init';
// import firebase from 'firebase';

export default {
  name: 'Home',
  components: {
    Register,
    Footer,
  },
};
</script>

<style scoped lang="scss">
.home {
  width: 100%;
  height: 735px;
  margin: 0, auto;
}

.homeMain {
  width: 90%;
  height: 695px;
  margin: auto;
  padding-top: 140px;
  box-sizing: border-box;
}

.logo {
  width: 40%;
}

.container {
  width: 100%;
  height: 215px;
  margin: auto;
  padding-top: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-sizing: border-box;
}

.textContainer {
  width: 45%;
  height: 195px;
  margin: auto;
  display: inline-block;
  box-sizing: border-box;
  border-radius: 10px;
  // border: 1px solid white;
}

.formContainer {
  width: 45%;
  height: 195px;
  margin: auto;
  padding-top: 0px;
  vertical-align: top;
  box-sizing: border-box;
  display: inline-block;
  border-radius: 10px;
  background-color: #131313;
}
/*
.alignLeftText {
  text-align: left;
  padding-left: 45px;
}
*/
.welcome {
  font-family: Freestyle Script;
}

.mainText {
  text-align: right;
}

.icons {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.separator {
  margin: auto;
  text-align: right;
  color: #CC9933;
}

.linkedinButton,
.githubButton {
  width: 30px;
  height: 30px;
  margin-left: 20px;
  margin-right: 0px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: none;
  background-color: transparent;

  .iconLinkedin,
  .iconGithub {
    width: 24px;
    height: 24px;
    margin-left: -2px;
  }
}
</style>
