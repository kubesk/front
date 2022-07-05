<template>
  <div>
      <li v-for="item in cartItems" v-bind:key="item.title" class="post">
        <div class="div-first"> <img class="v-align" :src="`/${item.imageFile}`"/> </div>
        <div class="div-second"> 
          <router-link v-bind:to="`/item/${item.id}`"> {{item.title}} </router-link>
        </div>
        <div class="div-third">
          {{item.price | comma}}
        </div>
      </li>
  </div>
</template>

<script>

export default {
  components: {  },
  computed:{
      cartItems(){
        return this.$store.state.cartList;
      },
  },
  methods: {
    fetchCartList(){
      this.$store.dispatch('actFetchCartList')
      .then(()=>{
        console.log('fetched: ');
      })
      .catch((error)=>{
        console.log(error);
      });
    }
  },
  filters:{
    comma(str) {
      str = String(str);
      return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
    },
  },


}

</script>

<style>
.div-first{
  width: 40%;

}
.div-second{
  width: 20%;
  text-align: left;
}
.div-third{
  width: 20%;
  text-align: right;

}
.align-center{
  text-align: center;
}
.align-table{
  margin-left: auto;
  margin-right: auto;
}
.align-right{
  text-align: right;
}
.align-left{
  text-align: left;
}
.align{
  align-items: center;  
}

.v-align{
  vertical-align: middle;
}

.post {
  display: flex;
  align-items: center;
  text-align: center;
  list-style: none;
  border-bottom: 1px solid #eee;
  margin-left: 20%;
}

.link-text{
  color: #828282
}

</style>