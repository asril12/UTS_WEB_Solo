import Vue from 'vue'
import Router from 'vue-router'

// User
import User from '../views/user/list'
import AddUser from '../views/user/add'
import EditUser from '../views/user/edit'
import DetailUser from '../views/user/detail'

// Article
import Article from '../views/Article/list'
import AddArticle from '../views/Article/add'
import EditArticle from '../views/Article/edit'
import DetailArticle from '../views/Article/detail'

// Product
import Product from '../views/product/list'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'list-user',
			component: User
		},
		{
			path: '/list-user',
			name: 'list-user',
			component: User
		},
		{
			path: '/add-user',
			name: 'add-user',
			component: AddUser
		},
		{
			path: '/edit-user',
			name: 'edit-user',
			component: EditUser
		},
		{
			path: '/detail-user',
			name: 'detail-user',
			component: DetailUser
		},
		{
			path: '/list-article',
			name: 'list-article',
			component: Article
		},
		{
			path: '/add-article',
			name: 'list-article',
			component: AddArticle
		},
		{
			path: '/edit-article',
			name: 'edit-article',
			component: EditArticle
		},
		{
			path: '/detail-article',
			name: 'detail-article',
			component: DetailArticle
		},
		{
			path: '/list-product',
			name: 'list-product',
			component: Product
		}
	]
})
