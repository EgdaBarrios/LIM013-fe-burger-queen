<template>
  <div class="home">
    <div class="homeMain">
      <img class="logo" alt="App logo" src="../assets/logoBQ.png">
      <h1 class="welcome">Bienvenid@ a tu aplicación Burger Queen</h1>
      <p>Proyecto en desarrollo, iniciado durante el bootcamp y construido con el
      framework progresivo Javascript Vue. Consiste en una Single Page App con interfaz en la que
      se pueden tomar los pedidos de un pequeño restaurante usando una tablet, y enviarlos a la
      cocina para ser preparados.</p>
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
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue';
// import db from '@/firebase/init';
// import firebase from 'firebase';

export default {
  name: 'Home',
  components: {
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
  width: 80%;
  height: 695px;
  margin: auto;
  padding-top: 130px;
  box-sizing: border-box;
}

.welcome {
  font-family: Freestyle Script;
}

.icons {
  display: flex;
  justify-content: center;
  align-items: center;
}

.separator {
  margin: auto;
  text-align: center;
  color: #CC9933;
}

.linkedinButton,
.githubButton {
  width: 30px;
  height: 30px;
  margin: 10px;
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
