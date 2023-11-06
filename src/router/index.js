import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path: '/',
      name: 'home',
      component: () => import('@/views/Home/Home.vue'),
      meta: { title: '首页', name: 'home', isTab: true }
    },
    { 
      path: '/category', 
      component: () => import('../views/Category/Category.vue'), 
      name: 'category',
      meta: { title: '分类', isTab: true, isShowNav: true }
    },
    { 
      path: '/goodslist/:category_id',
      component: () => import('../views/GoodsList/GoodsList.vue'), 
      props: true, 
      name: 'goodslist', 
      meta: { title: '商品列表', isTab: true, isShowNav: true, isShowBack: true } 
    },
    { 
      path: '/goodsDetail/:id',
      component: () => import('../views/GoodsDetail/GoodsDetail.vue'), 
      props: true, 
      name: 'goodsDetail', 
      meta: { title: '商品详情', isTab: false, isShowNav: true, isShowBack: true } 
    },

    {
      path: '/message',
      component: () => import('../views/Message/Message.vue'),
      name: 'message',
      meta: { title: '消息', isTab: true, isShowNav: true }
    },
    {
      path: '/cart' ,
      component: () => import('../views/Cart/Cart.vue'),
      name: 'cart' ,
      meta: { title: '购物车', isTab: true, isShowNav: true, isShowBack: true }
    },
    { 
      path: '/user', 
      component: () => import('../views/User/User.vue'),
      name: 'user', 
      meta: { title: '我的', isTab: true }
    },
    { 
      path: '/login',
      component: () => import('../views/Login/Login.vue'), 
      name: 'login', 
      meta: { title: '登录', isTab: true, isShowNav: true, isShowBack: true } 
    },
    { 
      path: '/register', 
      component: () => import('../views/Register/Register.vue'), 
      name: 'register', 
      meta: { title: '注册', isTab: true, isShowNav: true, isShowBack: true } 
    },
  ]
})


router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title
  if (title) {
    document.title = title + ' - 微商城'
  }
  next() 
})
export default router
