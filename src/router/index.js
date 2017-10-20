import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Admin from '@/components/admin/admin'
import Applications from '@/components/applications/applications'
import Dashboard from '@/components/dashboard/dashboard'
import Reports from '@/components/reports/reports'
import examCenterUpload from "@/components/examCenterUpload/examCenterUpload"
import examScoreUpload from "@/components/examScoreUpload/examScoreUpload"
import jambScoreUpload from "@/components/jambScoreUpload/jambScoreUpload"
import userMangement from "@/components/userManagement/userManagement"
import paymentStatus from "@/components/PaymentStatus/paymentStatus"
import changePassword from "@/components/changePassword/changePassword"
import addCenter from "@/components/examCenterUpload/addCenterForm/addCenter"
import examCenterTable from "@/components/examCenterUpload/examCenterTable/examCenterTable"

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
      children:[
        {
          'path':"exam_score_upload",
          'component':examScoreUpload
        },
        {
          'path':'exam_center_upload',
          'component':examCenterUpload,
          'children': [
            {
              'path':'addNew',
              'component': addCenter
            },
            {
              'path':'allcenters',
              'component': examCenterTable
            }
          ]
        },
        {
          'path':'jamb_score_upload',
          'component':jambScoreUpload
        },
        {
          'path':'user_management',
          'component':userMangement
        },
        {
          'path':'checkPayment_status',
          'component':paymentStatus
        },
        {
          'path':'change_password',
          'component':changePassword
        }
      ]
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
