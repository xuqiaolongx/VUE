import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import Vrouter from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(Vrouter)
Vue.use(ElementUI, { locale })
Vue.config.productionTip = false

import HelloWorld from './components/HelloWorld.vue'
import From from './components/From'
import Select from './components/Select'
import Table from './components/Table'
import Table_1 from './components/Table_1'
import NotFind from './components/404'
const ComA = { template: '<div>ComA</div>'}
const ComB = { template: '<div>ComB</div>'}
const ComC = { template: '<div>ComC</div>'}
const ComD = { template: '<div>ComD</div>'}

const router = new Vrouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/com-*', component: Table, meta: {test1: true,b: {a:1}},
    children: [
      {path: 'aa', component: HelloWorld,
        children: [
          {path: 'aa', component: HelloWorld},
        ]
      },
      {path: 'bb', component: HelloWorld}
    ]},
    {path: '/', component: HelloWorld},
    {path:'/form/table',component:Table},
    {path:'/form/table1',component:Table_1},
    {path: '*', component: NotFind},
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
