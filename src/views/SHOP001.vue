<template>
  <div>
    <cart-header></cart-header>
    <cart-body></cart-body>
    <cart-footer></cart-footer>

  </div>
</template>

<script>

import CartHeader from '../components/CartHeader.vue'
import CartBody from '../components/CartBody.vue'
import CartFooter from '../components/CartFooter.vue'

export default {
  components:{
    CartHeader,
    CartBody,
    CartFooter,
  },
  computed:{

  },
  created(){
    this.$store.dispatch('actFetchCartList')
      .then(()=>{
        console.log('created CartView with actFetchCartList');
      })
      .catch((error)=>{
        console.log(error);
      });
  },
}
</script>

<style>

.fa-user {
  font-size: 2.5rem;
}
.user-description{
  padding-left: 8px;
}
.time {
  font-size: 0.78rem;
}
</style>