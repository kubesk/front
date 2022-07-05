import Vue from 'vue'
import Vuex from 'vuex'
import {fetchCartList,fetchCartItem } from '../api/api.js'

Vue.use(Vuex);

const state = {
    cartList: [],
    cartItem: {},
};

const getters = {
};

const mutations = {
    setCartList(state, data){
        state.cartList = data;
    },
    setCartItem(state, data){
        state.cartItem = data;
    },    
}

const actions = {
    actFetchCartList({commit}){
        return fetchCartList()
          .then(({data})=>{
            commit('setCartList',data.cartList);
          })
    },
    actFetchCartItem({commit}, id){
        return fetchCartItem(id)
          .then(({data})=>{
            commit('setCartItem',data.item);
          })
          .catch(error=>{
            console.log(error);
          })
    },
}

export const store = new Vuex.Store({
    modules: {
    },
    state,
    getters,
    mutations,
    actions

});