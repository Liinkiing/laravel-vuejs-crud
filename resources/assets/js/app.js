import Vue from 'vue';
import router from './router';
import 'vue-awesome/icons';

import Icon from 'vue-awesome/components/Icon';
import VueLocalStorage from 'vue-localstorage';

Vue.use(VueLocalStorage);

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    data() {
        return {
            folded: false,
        }
    },
    created() {
        this.folded = this.$localStorage.get('folded') === "true" || false;
    },
    updated() {
        if(this.folded !== this.$localStorage.get('folded')) this.$localStorage.set('folded', this.folded);
        console.log(this.$localStorage.get('folded'))
    },
    computed: {
        pagesNames() {
            let routes = this.$router.options.routes;
            let results = {};
            routes.forEach(route => { results[route.name] = route.title });
            return results;
        }
    },
    components: { Icon },
    methods: {
        toggleMenu() {
            this.folded = !this.folded;
        },
        navItemClick(e) {
            e.target.firstChild.click();
        }
    },
    router
});


