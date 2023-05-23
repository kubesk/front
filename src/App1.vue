<template>
  <div>
    <!-- Title -->
      <div class="main-title">
        <h1>서비스 이용내역</h1>
        <div>{{userName}}</div>
      </div>
    <hr />
    <!-- List summary  -->
    <div class="service-summary">
      <div class="service-summary-tab">
        <button data-ptype=1 class="tablinks" :class="{on: ptype===1}" @click="handleTabClick">1주일</button>
        <button data-ptype=2 class="tablinks" :class="{on: ptype===2}" @click="handleTabClick">1개월</button>
        <button data-ptype=3 class="tablinks" :class="{on: ptype===3}" @click="handleTabClick">3개월</button>
      </div>
      <div class="spacer-20"></div>
      <div class="service-summary-detail-container">
        <div class="color-gray">이용건수</div>
        <div>{{summary.count}}건</div>
        <div class="color-gray">이용시간</div>
        <div>{{summary.minute}}분</div>
        <div class="color-gray">이동거리</div>
        <div>{{summary.distance}}km</div>
        <div class="color-gray">탄소절감효과</div>
        <div>{{summary.carbonReduction}}kg</div>
      </div>
    </div>

    <hr />

    <!-- Usage List -->
    <div v-if="this.usage.list.length > 0" class="service-list-container">
      <template v-for="item in usage.list" :key="item">
        <div class="service-list-content">
          <div class="service-list-header">
            <span>{{item.distance}}km</span>
            <span class="color-gray ml-10">{{item.use_time}}분</span>
          </div>
          <div class="service-list-body">
            <div class="color-gray">이용시간</div>
            <div>{{item.use_start_dt}} ~ {{item.use_end_dt}}</div>
            <div class="color-gray">결제일시</div>
            <div>{{item.pay_datetime}}</div>
            <div class="color-gray">결제수단</div>
            <div>{{item.totalPayment}}</div>
          </div>
        </div>
        <hr />
      </template>
    </div>

    <!-- Empty -->
    <div v-if="this.usage.list.length === 0" class="service-empty">
      <div class="service-empty-container">
        <div class="service-empty-message">
          조회된 정보가 없습니다.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'

const USER_NO = 'ME00001'
const INIT_SUMMARY = {
  count: 0,
  minute: 0,
  distance: 0,
  carbonReduction: 0,
}
const INIT_USAGE = {
  list: []
}

const meterToKillo = (value = 0) => {
  return (value/1000).toFixed(1)
}
const getTotalPaymentString = (cardPay=0, pointPay=0) => {
  let result = ''
  if (cardPay !== 0 && pointPay !== 0){
    result = `카드 ${cardPay}원 + 포인트 ${pointPay}P`
  } else if (cardPay !==0 && pointPay === 0){
    result = `카드 ${cardPay}원`
  } else if (cardPay === 0 && pointPay !== 0){
    result = `포인트 ${pointPay}P`
  } else {
    result = ''
  }
  return result
}



export default {
  name: 'App',
  data() {
    return {
      userName: '',
      ptype: 1,
      summary: INIT_SUMMARY,
      usage: INIT_USAGE,
    }
  },
  watch: {
    ptype(){
      this.getSummary()
      this.getUsage()
    }
  },
  mounted() {
    this.getUserName()
    this.getSummary()
    this.getUsage()
  },

  methods: {
    getUserName() {
      axios.get(`http://localhost:8080/api/v1/user/${USER_NO}`)
        .then(response => {
          this.userName = response.data?.name
        })
    },
    getSummary() {
      axios.get(`http://localhost:8080/api/v1/user/${USER_NO}/usage/summary?ptype=${this.ptype}`)
        .then(response => {
          const data = response.data
          this.summary = {
            count: data.usage_count,
            minute: data.usage_minute,
            distance: meterToKillo(data.usage_meter),
            carbonReduction: data.carbon_reduction.toFixed(1),
          }
        })
    },
    getUsage() {
      axios.get(`http://localhost:8080/api/v1/user/${USER_NO}/usage?ptype=${this.ptype}`)
        .then(response => {
          const data = response.data
          const list = data.list.map((item)=>({...item,
                        distance: meterToKillo(item.use_distance),
                        totalPayment: getTotalPaymentString(item.card_pay,item.point_pay)  }))
          this.usage = {
            list
          }
        })
    },

    handleTabClick(e) {
      this.ptype = +e.target.dataset.ptype
    },



  }

}
</script>

<style>
@import url(./res/index.css);
@import url(./res/reset.css);
</style>
