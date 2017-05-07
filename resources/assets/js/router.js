import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', name: 'home', title: 'Accueil', showInMenu: true, icon: 'home', component: Home},
        {path: '/about', name: 'about', title: 'A propos', showInMenu: true, component: About},
        {path: '*', name: '404', title: 'Erreur', showInMenu: false, component: NotFound},
    ]
});

export default router;