// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
// 引入路由组件
import goods from './components/goods/goods';
import seller from './components/seller/seller';
import ratings from './components/ratings/ratings';
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.use(VueRouter);

// var app = Vue.extend(App);

// var router = new VueRouter();
// router.map({
//   '/goods':
//   {
//     component: goods
//   }
// });
// router.start(app, '#app');

// 定义路由
const routes = [
  {
    path: '/goods',
    component: goods
  },
  {
    path: '/ratings',
    component: ratings
  },
  {
    path: '/seller',
    component: seller
  }
];

// 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes
});

// 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
new Vue({
  router,
  components: {
    App
  },
  template: '<App/>'
}).$mount('#app');
// router.go('/ratings');
