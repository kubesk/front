<template>
  <div class="user-container">
    <div>
      <i class="fas fa-user"></i>
    </div>
    <div class="user-description">
      <div>
        <slot name="username"></slot>
      </div>
      <template class="time">
        <slot name="time"></slot>
      </template>
      <slot name='karma'></slot>
    </div>

  </div>
</template>

<script>
export default {
  computed:{
      getUser(){
        console.log("computed getUser");
        return this.$store.state.vuenews.user;
      },
      getItem(){
        console.log("computed getItem");
        return this.$store.state.vuenews.item;
      },
  },
  created(){

  },


}
</script>

<style>

</style>
