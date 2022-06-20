import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import todoApp from './modules/todoApp'
import vuenews from './modules/vuenews.js'

export const store = new Vuex.Store({
    modules: {
        todoApp,
        vuenews,
    },

});
