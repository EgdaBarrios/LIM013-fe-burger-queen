<template>
  <div class="waiter">
    <Navbar />
    <WaiterMain />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import WaiterMain from '@/components/WaiterMain.vue';
import Footer from '@/components/Footer.vue';
// import db from '@/firebase/init';
// import firebase from 'firebase';

export default {
  name: 'Waiter',
  components: {
    Navbar,
    WaiterMain,
    Footer,
  },
};
</script>
