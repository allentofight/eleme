import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';

Vue.use(VueRouter);

let app = Vue.extend(App);

let router = new VueRouter({
	linkActiveClass: 'active'		// 默认a被选中的话会加v-link-class class，这里我们把它改成了active的class
});

router.map({
	'/goods': {
		component: goods
	},
	'/ratings': {
		component: ratings
	},
	'seller': {
		component: seller
	}
});

router.start(app, '#app');
router.go('/goods');
