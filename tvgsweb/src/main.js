import Vue from 'vue'
import App from './App.vue'
import './plugins'
import './assets/style.css'
import store from './store';

import router from './router'

new Vue({
  
  el: '#app',
  store,
  router,// phần này phải là đúng tên 'router', sai tê là không load đc comp vào route-view
  render: h => h(App)
})


// Mỗi thành phần trong Web tương ứng mỗi Component -> Tương ứng với 1 file *.vue