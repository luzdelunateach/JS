import Vue from 'vue';
import VueRouter from 'vue-router';

import DashboardComponent from '../src/components/pages/Dashboard-Component';
import Grafica1Component from '../src/components/pages/Grafica1-Component';
import PagenotfoundComponent from '../src/components/pages/Pagenotfound-Component';
import ProgressComponent from '../src/components/pages/Progress-Component';
import LoginComponent from '../src/components/auth/Login-Component';
import RegisterComponent from '../src/components/auth/Register-Component';
Vue.use(VueRouter);
export const routes = [
    {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardComponent
    },
    {
        path: '/grafica1',
        name: 'grafica1',
        component: Grafica1Component
    },
    {
        path: '/notfound',
        name: 'notfound',
        component: PagenotfoundComponent
    },
    {
        path: '/progress',
        name: 'progress',
        component: ProgressComponent
    },
    {
        path: '/login',
        name: 'login',
        component: LoginComponent
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterComponent
    },

]
const router= new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});
export default router;