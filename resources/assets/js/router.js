import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home.vue'
import About from './views/About.vue'
import Login from './views/Login.vue'
import NotFound from './views/NotFound.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', name: 'home', title: 'Accueil', showInMenu: true, icon: 'home', component: Home},
        {path: '/login', alias: '/register', name: 'login', title: 'Se connecter / S\'inscrire', icon: 'user', component: Login},
        {path: '/about', name: 'about', title: 'A propos', icon: 'question-circle', showInMenu: true, component: About},
        {path: '*', name: '404', title: 'Erreur', component: NotFound},
    ]
});

export default router;