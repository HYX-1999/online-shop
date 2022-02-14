/*
 * @Description: 
 * @Author: hyx
 * @Date: 2022-02-14 14:36:17
 * @LastEditors: hyx
 * @LastEditTime: 2022-02-14 16:41:36
 */

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Cart from '@/views/Cart.vue'
import Index from '@/views/admin/Index.vue'
import New from '@/views/admin/New.vue'
import Products from '@/views/admin/Products.vue'
import Edit from '@/views/admin/Edit.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Index,
    children: [
      {
        path: 'new',
        name: 'New',
        component: New,
      },
      {
        path: 'products',
        name: 'Products',
        component: Products,
      },
      {
        path: 'edit/:id',
        name: 'Edit',
        component: Edit,
      },
    ]
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
