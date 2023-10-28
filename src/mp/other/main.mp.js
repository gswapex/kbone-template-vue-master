import Vue from 'vue'
import Router from 'vue-router'
import App from '../../App.vue'
import store from '../../store'
import List from '../../list/Index.vue'
import Detail from '../../detail/Index.vue'
import Epic from '../../epic/Index.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/test/list/:id',
      name: 'List',
      component: List,
    }, {
      path: '/test/epic/:id',
      name: 'Epic',
      component: Epic,
    },
    {
      path: '/test/detail/:id',
      name: 'Detail',
      component: Detail,
    }],
  mode: 'history',
})

export default function createApp() {
  const container = document.createElement('div')
  container.id = 'app'
  document.body.appendChild(container)

  Vue.config.productionTip = false

  return new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
  })
}
