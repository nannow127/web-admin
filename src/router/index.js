import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import People from '../views/people/index.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: Home, // 'People',
    component: Home, // People,
    meta: { title: '' },
    children: [
      {
        path: '/text',
        name: 'text',
        meta: { title: 'text' },
        component: function () {
          return import(/* webpackChunkName: "about" */ '../views/people/text.vue')
        }
      },
      {
        path: '/text2',
        name: 'text2',
        meta: { title: 'text2' },
        component: function () {
          return import(/* webpackChunkName: "about" */ '../views/people/text2.vue')
        }
      },
      {
        path: '/text3',
        name: 'text3',
        meta: { title: 'text3' },
        component: function () {
          return import(/* webpackChunkName: "about" */ '../views/people/text3.vue')
        }
      },
      {
        path: '/text4',
        name: 'text4',
        meta: { title: 'text4' },
        component: function () {
          return import(/* webpackChunkName: "about" */ '../views/people/text4.vue')
        }
      }

    ]
  },

  // {
  //   path: '/details',
  //   name: 'Details',
  //   meta: { title: '名人堂' },
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../views/people/details.vue')
  //   }
  // },
  // {
  //   path: '/addPeople',
  //   name: 'AddPeople',
  //   meta: { title: '名人堂' },
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../views/people/addPeople.vue')
  //   }
  // },
  // {
  //   path: '/addRice',
  //   name: 'addRice',
  //   meta: { title: 'addRice' },
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../views/rice/addRice.vue')
  //   }
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../views/About.vue')
  //   }
  // }
]

const router = new VueRouter({
  routes
})

export default router
