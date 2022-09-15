import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexView from '../views/Index.vue'

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	base: import.meta.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'index',
			component: IndexView
		}
		// {
		//   path: '/fb',
		//   name: 'fb',
		//   component: () => import('../views/fbView.vue')
		// }
	]
});

export default router
