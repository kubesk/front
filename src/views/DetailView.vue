<template>
  <div>
    <detail-item></detail-item>
  </div>
</template>

<script>

import DetailItem from '../components/DetailItem.vue'

export default {
  components:{
    DetailItem,
  },
  computed:{

  },
  created(){
    const id = this.$route.params.id;
    this.$store.dispatch('actFetchCartItem',id)
      .then(()=>{
        console.log('created DetailView with actFetchCartItem');
      })
      .catch((error)=>{
        console.log(error);
      });
  },
}
</script>

<style>

.align-center{
  text-align: center;
}

.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
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