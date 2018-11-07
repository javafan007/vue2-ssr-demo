
import Vue from 'vue';
import VueRouter from 'vue-router';
import List from '../component/List.vue';
import Detail from '../component/Detail.vue';

Vue.use(VueRouter)

export function createRouter () {

    return new VueRouter({
        mode: 'history',
        routes: [
            // {
            //     path: '',
            //     redirect: '/'
            // },
            {
                path: '/list',
                name: 'list',
                component: List
            },
            {
                path: '/detail/:id',
                name: 'detail',
                component: Detail
            }
        ]
    })

}