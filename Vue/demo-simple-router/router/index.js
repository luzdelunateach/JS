import Vue from 'vue';
import VueRouter from 'vue-router';

import FacturasComponent from '../src/components/Facturas-Component';

Vue.use(VueRouter);
export const routes = [
    {
    path: '/clientes',
    name: 'clientes',
    component: () => import('../src/components/Clientes-Component')
    //component: ClientesComponent
    },
    {
        path: '/facturas',
        name: 'facturas',
        component: FacturasComponent
    }
]
const router= new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});
export default router;