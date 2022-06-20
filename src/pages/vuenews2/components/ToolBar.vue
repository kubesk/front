<template>
  <div class="header">
      <button v-on:click="fetchList('news')">News</button>
      <button v-on:click="fetchList('ask')">Ask</button>
      <button v-on:click="fetchList('jobs')">Jobs</button>
  </div>
</template>

<script>



export default {

  methods: {
      fetchList(name){
        this.$store.dispatch('actFetchList',name)
        .then(()=>{
          console.log('fetched: '+name);
        })
        .catch((error)=>{
          console.log(error);
        });
      }
  }

}
</script>

<style scoped>
.header{
    background-color: #42B883;
    color: white;
    display: flex;
    padding: 8px
}
.header .router-link-exact-active{
    color: #35495e
}
.header a{
    color: white;
}
</style>
