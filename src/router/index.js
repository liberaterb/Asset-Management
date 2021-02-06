import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },

  {
    path: '/asset-manage',
    name: 'AssetManage',
    component: Layout,
    // redirect: '/asset-manage/asset-add',
    meta: { title: '资源管理', icon: 'form' },
    children: [
      {
        path: 'asset-add',
        component: () => import('@/views/asset-manage/asset-add/index'), // Parent router-view
        name: 'AssetAdd',
        meta: { title: '资产添加' }
      },
      {
        path: 'asset-list',
        component: () => import('@/views/asset-manage/asset-list/index'),
        name: 'AssetList',
        meta: { title: '资产列表' }
      },
      {
        path: 'asset-registe',
        component: () => import('@/views/asset-manage/asset-registe/index'),
        name: 'AssetRegiste',
        meta: { title: '借还登记' }
      }
    ]
  },
  {
    path: '/report-analysis',
    name: 'ReportAnalysis',
    component: Layout,
    // redirect: '/asset-manage/asset-add',
    meta: { title: '报表分析', icon: 'form' },
    children: [
      {
        path: 'asset-overview',
        component: () => import('@/views/report-analysis/asset-overview/index'),
        name: 'AssetOverview',
        meta: { title: '资产总览' }
      },
      {
        path: 'asset-statement',
        component: () => import('@/views/report-analysis/asset-statement/index'),
        name: 'AssetStatement',
        meta: { title: '借还报表' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
