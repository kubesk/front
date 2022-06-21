<template>
  <div>

    <list-item></list-item>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ListItem from '../components/ListItem.vue'

export default {
  components:{
    ListItem,
  },
  computed:{

  },
  created(){

  },
}
</script>

<style>
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
