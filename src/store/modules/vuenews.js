
import {fetchUserList,fetchItemList,fetchList } from '../../api/vuenews.js'

const state = {
    user: {},
    item: {},
    list: [],
};

const getters = {
    getUser({user}){
        return user;
    },
};

const mutations = {
    setUser(state, data){
        state.user = data;
    },
    setItem(state, data){
        state.item = data;
    },
    setList(state, data){
        state.list = data;
    },
}

const actions = {
    actFetchUser({commit}, name){
        return fetchUserList(name)
          .then(({data})=>{
            commit('setUser',data);
          })
          .catch(error=>{
              console.log(error);
          })
    },
    actFetchList({commit},pageName){
        return fetchList(pageName)
          .then(({data})=>commit('setList',data))
          .catch(error=>console.log(error));
    },
    actFetchItem({commit}, id){
        return fetchItemList(id)
          .then(({data})=>{
            commit('setItem',data);
          })
          .catch(error=>{
              console.log(error);
          })
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}
