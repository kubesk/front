<template>
  <div>
    <p class="align-center">※ 배송비 3,000원 (총 상품금액 5만원 이상 무료배송) </p>
    <table class="align-table">
      <tr>
        <th width="60%"></th>
        <th width="20%"></th>
        <th width="20%"></th>
      </tr>
      <tr>
        <td></td>
        <td>총 상품금액</td>
        <td>{{totalCartItemPrice | comma}}</td>
      </tr>
      <tr>
        <td></td>
        <td>배송비</td>
        <td>{{postPee | comma}}</td>
      </tr>
      <tr>
        <td></td>
        <td>총 결제금액</td>
        <td>({{cartItemCount}}개){{totalPrice | comma}}</td>
      </tr>
    </table>
  </div>
  
</template>

<script>

export default {
    computed:{
        cartItems: function(){
          return this.$store.state.dcx.cartList;
        },
        totalCartItemPrice: function(){
          let sum = 0;

          for(let i = 0; i < this.cartItems.length; i++){
            sum += parseFloat(this.cartItems[i].price);
          }
          return sum;
        },
        postPee: function(){
          if (this.totalCartItemPrice >= 50000){
            return 0;
          }else{
            return 3000;
          }
        },
        totalPrice: function(){
          return this.totalCartItemPrice + this.postPee;
        },
        cartItemCount: function(){
          return this.cartItems.length;
        },
    },
    methods: {

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
.align-table{
  margin-left: auto; 

}
.align-center{
  text-align: center;
}
.align{
  align-items: center;  
}

.v-align{
  vertical-align: middle;
}

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
img {
      width: 250px;
}
</style>