<template>
  <div class="register">
    <div v-if="authUser">
      <h2>Loggeado como {{ currentUser }}</h2>
      <!--<p>Hola, {{ userName }}</p>-->
      <p>Hola, {{ currentUser | userName | capitalize }}</p>
      <button @click="signOut">Salir</button>
    </div>
    <div v-else>
      <form @submit.prevent="register">
        <p class="alignLeftText">Eres nuevo usuario?</p>
        <h2 class="alignLeftText">Regístrate aquí:</h2>
        <input type="email" v-model="email" placeholder="Ingresa un correo">
        <input type="password" v-model="password" placeholder="Ingresa una contraseña">
        <button>Registrar</button>
      </form>
      <form @submit.prevent="signIn">
        <p class="alignLeftText">Eres parte del equipo?</p>
        <h2 class="alignLeftText">Ingresa aquí:</h2>
        <input type="email" v-model="email" placeholder="Ingresa tu correo">
        <input type="password" v-model="password" placeholder="Ingresa tu contraseña">
        <button>Ingresar</button>
      </form>
    </div>
  </div>
</template>

<script>
// import db from '@/firebase/init';
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  name: 'Register',
  data() {
    return {
      email: '',
      password: '',
      authUser: null,
    };
  },
  methods: {
    register() {
      firebase
        .auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(() => console.log('all good!'))
        .catch((error) => alert(error.message));
    },
    signOut() {
      firebase.auth().signOut();
    },
    signIn() {
      firebase
        .auth().signInWithEmailAndPassword(this.email, this.password)
        .then(() => console.log('all good!'))
        .then(() => {
          this.$router.push('/waiterTwo');
        })
        .catch((error) => alert(error.message));
    },
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => { this.authUser = user; });
  },
  filters: {
    userName(value) {
      if (!value) return '';
      const v = value.toString();
      return v.substring(0, value.lastIndexOf('@'));
    },
    capitalize(value) {
      if (!value) return '';
      const v = value.toString();
      return v.charAt(0).toUpperCase() + value.slice(1);
    },
  },
  computed: {
    currentUser() {
      return this.authUser.email;
    },
  },
  /*
  props: [
    'currentUser',
    'userName',
    'capitalize',
    // 'msg',
  ],
  */
};
</script>

<style scoped>
.register {
  width: 100%;
  height: 195px;
  margin: auto;
  padding-top: 0px;
  vertical-align: top;
  box-sizing: border-box;
  display: inline-block;
}

.alignLeftText {
  text-align: left;
  padding-left: 45px;
}
</style>
