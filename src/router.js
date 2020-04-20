import Vue from 'vue';
import Router from 'vue-router';
import Main from './components/main';
import Store_list from './components/store_list';
import Service from './components/service';

Vue.use(Router);

export default new Router ({
mode: 'history',
routes: [
    {
        path: '/',
        component: Main,
    },
    {
        path: '/story',
        component: Store_list,
    },
    {
        path: '/service',
        component: Service,
    },
]
})