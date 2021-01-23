<template>
  <div class="waiter">
    <Navbar />
    <WaiterMainTwo />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import WaiterMainTwo from '@/components/WaiterMainTwo.vue';
import Footer from '@/components/Footer.vue';
// import db from '@/firebase/init';
// import firebase from 'firebase';

export default {
  name: 'WaiterTwo',
  components: {
    Navbar,
    WaiterMainTwo,
    Footer,
  },
};
</script>
