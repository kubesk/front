<template>
  <div>
    <ul class="news-list">
        <li v-for="item in listItems" v-bind:key="item.title" class="post">
        <div class="points">
          {{item.points || 0}}
        </div>
        <div>
          <p class="news-title">
            <template v-if="item.domain">
                <a v-bind:href="item.url">
                {{item.title}} 
                </a>
            </template>
            <template v-else>
                <router-link v-bind:to="`/vuenews/item/${item.id}`">
                    {{item.title}}
                </router-link>
            </template>
          </p>
          <small class="link-text"> {{item.time_ago}}  by
              <router-link class="link-text" 
                v-bind:to="`/vuenews/user/${item.user}`"
                v-if="item.user">
                {{item.user}}
              </router-link>
              <a :href="item.url" v-else>
                {{item.domain}}
              </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    computed:{
        listItems(){
          return this.$store.state.vuenews.list;
        },
    }
}
</script>

<style>

.news-list {
  margin: 0;
  padding: 0;
}
.post {
  display: flex;
  align-items: center;
  list-style: none;
  border-bottom: 1px solid #eee;
}
.points{
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title{
  margin: 0;
}
.link-text{
  color: #828282
}
</style>
