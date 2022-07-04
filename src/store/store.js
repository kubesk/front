import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import dcx from './modules/dcx.js'

export const store = new Vuex.Store({
    modules: {
        dcx,
    },

});