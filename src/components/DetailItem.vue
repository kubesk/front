<template>
  <div>
    <h3 class="align-center">{{cartItem.title}}</h3>
    <p class="align-center"><img :src="`/${cartItem.imageFile}`"/></p>

    <table class="align-table" >
      <tr>
        <td class="align-left">판매가격</td>
        <td class="align-right">{{cartItem.price}}</td>
      </tr>
      <tr>
        <td class="align-left">제조사</td>
        <td class="align-right">{{cartItem.company}}</td>
      </tr>
      <tr>
        <td class="align-left">모델명</td>
        <td class="align-right">{{cartItem.model}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
    computed:{
        cartItem: function(){
          return this.$store.state.cartItem;
        },
    },
}
</script>

<style>
.align-table{
  margin-left: auto; 
  margin-right: auto;
}
.align-center{
  text-align: center;
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

.post {
  display: flex;
  align-items: center;
  list-style: none;
  border-bottom: 1px solid #eee;
}
.link-text{
  color: #828282
}
img {
      width: 250px;
}
</style>