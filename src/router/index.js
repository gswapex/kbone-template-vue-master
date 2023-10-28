import Vue from 'vue'
import Router from 'vue-router'

import Detail from '../detail/Index.vue'

const Home = () => import(/* webpackChunkName: "Home" */'@/home/Index.vue')
const List = () => import(/* webpackChunkName: "List" */'@/list/Index.vue')
// const Detail = () => import(/* webpackChunkName: "Detail" */'@/detail/Index.vue')
const epic = () => import(/* webpackChunkName: "Detail" */'@/epic/Index.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/(home|index)?',
    name: 'Home',
    component: Home,
  }, {
    path: '/index.html',
    name: 'HomeHtml',
    component: Home,
  }, {
    path: '/test/(home|index)',
    name: 'HomeTest',
    component: Home,
  },
  {
    path: '/test/list/:id',
    name: 'List',
    component: List,
  }, {
    path: '/test/detail/:id',
    name: 'Detail',
    component: Detail,
  }, {
    path: '/test/epic/:id',
    name: 'epic',
    component: epic,
  }
  ],
})

