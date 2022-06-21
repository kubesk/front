<template>
  <div>
    <user-profile>
      <div slot="username">
        username: {{getUser.id}}
      </div>
      <span slot="time">
        Joined {{getUser.created}}, 
      </span>
      <span slot="karma">
        {{getUser.karma}}
      </span>
    </user-profile>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from '../components/UserProfile.vue'

export default {
  components:{
    UserProfile,
  },
  computed:{
    getUser(){
      return this.$store.state.vuenews.user;
    },
    getItem(){
      return this.$store.state.vuenews.item;
    },
  },
  created(){
    const userName = this.$route.params.id;
    console.log("userName:" + userName);
    this.$store.dispatch('actFetchUser',userName)
      .then(()=>{
        console.log('created UserView with '+userName);
      })
      .catch((error)=>{
        console.log(error);
      });

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
