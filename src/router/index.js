import Vue from 'vue'
import Router from 'vue-router'
import Posts from '@/components/Posts'
import Hello from '@/components/HelloWorld'
import NewPost from '@/components/NewPost'
import EditPost from '@/components/EditPost'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/posts/new',
      name: 'NewPost',
      component: NewPost
    },
    {
      path: '/posts/:Id',
      name: 'EditPost',
      component: EditPost
    }
  ]
})
