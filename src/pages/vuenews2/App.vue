<template>
  <div id="app" class="body">
    <br>
    <tool-bar></tool-bar><br>
    <list-item></list-item>

  </div>
</template>

<script>

  import ToolBar from './components/ToolBar.vue';
  import ListItem from './components/ListItem.vue';

  export default{
    components: {
      ToolBar,
        ListItem,
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
