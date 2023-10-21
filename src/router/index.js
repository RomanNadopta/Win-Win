import { defineComponent } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
// import AboutView from '../views/AboutView.vue';
// import FaqView from '../views/FaqView.vue';
// import LoginView from '../views/LoginView.vue';
// import RegisterView from '../views/RegisterView.vue';
// import ProfileView from '../views/ProfileView.vue';
// import ExchangeCreateView from '../views/ExchangeCreateView.vue';
// import ExchangeDetailView from '../views/ExchangeDetailView.vue';
// import CategoryListView from '../views/CategoryListView.vue';
// import FaqAnswerView from '../views/FaqAnswerView.vue';
import { getAuth } from 'firebase/auth';

const AboutView = () => import('../views/AboutView.vue');
const FaqView = () => import('../views/FaqView.vue');
const LoginView = () => import('../views/LoginView.vue');
const RegisterView = () => import('../views/RegisterView.vue');
const ProfileView = () => import('../views/ProfileView.vue');
const ExchangeCreateView = () => import('../views/ExchangeCreateView.vue');
const ExchangeDetailView = () => import('../views/ExchangeDetailView.vue');
const CategoryListView = () => import('../views/CategoryListView.vue');
const FaqAnswerView = () => import('../views/FaqAnswerView.vue');
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/faq',
    name: 'faq',
    component: FaqView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      onlyGuestUser: true,
    },
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
    meta: {
      onlyGuestUser: true,
    },
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    meta: { onlyAuthUser: true },
  },
  {
    path: '/exchanges/new',
    name: 'exchangeCreate',
    component: ExchangeCreateView,
    meta: { onlyAuthUser: true },
  },
  {
    path: '/exchanges/:slug',
    name: 'exchangeDetail',
    component: ExchangeDetailView,
  },
  {
    path: '/category-list/:type',
    name: 'categoryList',
    component: CategoryListView,
  },
  {
    path: '/faq-answer/:header',
    name: 'faqAnswer',
    component: FaqAnswerView,
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0 };
  },
});

router.beforeEach((to, _, next) => {
  const isAuth = !!getAuth().currentUser;
  if (to.meta.onlyAuthUser) {
    if (isAuth) {
      next();
    } else {
      next({ name: 'login' });
    }
  } else if (to.meta.onlyGuestUser) {
    if (isAuth) {
      next({ name: 'home' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
