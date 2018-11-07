
import Vue from 'vue';
import App from './App.vue';
import { sync } from 'vuex-router-sync';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import { createRouter } from './router/index';
import { createStore } from './vuex/index';

Vue.use(ElementUI);

export function createApp (ssrContext) {

    const router = createRouter()
    const store = createStore()

    sync(store, router)

    const app =  new Vue({
        router,
		store,
        ssrContext,
        render: h => h(App)
    });

    return { app, router, store }
}




