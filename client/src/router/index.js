import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'
import Posts from '@/components/Post'
import AdminInsight from '@/components/AdminInsights'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landingpage',
      component: LandingPage
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/adminPage',
      name: 'AdminInsight',
      component: AdminInsight
    }
  ]
})
