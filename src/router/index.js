import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Admin from '@/components/admin/admin'
import Applications from '@/components/applications/applications'
import Dashboard from '@/components/dashboard/dashboard'
import Reports from '@/components/reports/reports'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/DDJCLJCK',
      name: 'Index',
      component: Index
    },
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
    },
    {
      path: '/applications',
      name: 'Applications',
      component: Applications,
    },
    {
      path: '/reports',
      name: 'Reports',
      component: Reports,
    }
  ]
})
