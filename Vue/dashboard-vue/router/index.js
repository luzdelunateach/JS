import Vue from 'vue';
import VueRouter from 'vue-router';

import Grafica1Component from '@/components/pages/Grafica1-Component';
import ProgressComponent from '@/components/pages/Progress-Component';
import DashboardComponent from '@/components/pages/Dashboard-Component';
import PagesComponent from '@/components/pages/Pages-Component';
import PagenotfoundComponent from '@/components/pages/Pagenotfound-Component';
import LoginComponent from '@/components/auth/Login-Component';
import RegisterComponent from '@/components/auth/Register-Component';
Vue.use(VueRouter);
export const routes = [
    {
        
        path: '/',
        name: 'pages',
        component: PagesComponent,
        children: [
            {
                path: '/grafica1',
                name: 'grafica1',
                component: Grafica1Component
            },
            {
                path: '/progress',
                name: 'progress',
                component: ProgressComponent
            },
            {
                path: '/dashboard',
                name: 'dashboard',
                component: DashboardComponent
            },
        ]
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
    {
        path: '*',
        name: 'pagenotfound',
        component: PagenotfoundComponent
    },

]
const router= new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});
export default router;