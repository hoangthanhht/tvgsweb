require('./bootstrap');
import Vue from 'vue'
import App from './vue/app.vue'
window.Vue = require('vue').default;
const app = new Vue({
    el:'#app',
    components: {App}
});