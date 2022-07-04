<template>
  <div id="app" class="body">
    <transition name="page">
      <router-view ></router-view>
    </transition>
  </div>
</template>

<script>

  export default{
    components: {

    },
    data(){
      return {
        loadingStatus: false,
      };
    },
    methods:{

    }

  }


</script>


<style>
body{
  padding:0;
  margin:0;
}
a{
  color: #34495e;
  text-decoration: none;
}
a.router-link-exact-active{
  text-decoration: underline;
}
a:hover{
  color: #42b886;
  text-decoration: underline;

}

.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .page-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
