import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import RegisterView from '@/views/RegisterView.vue';
import RecoveryPasswordView from '@/views/RecoveryPasswordView.vue';
import TOSView from '@/views/TOSView.vue';
import RulesView from '@/views/RulesView.vue';
import NewsPaperView from '@/views/NewsPaperView.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterView,
    },
    {
        path: '/recovery-password',
        name: 'recovery-password',
        component: RecoveryPasswordView,
    },
    {
        path: '/tos',
        name: 'tos',
        component: TOSView,
    },
    {
        path: '/rules',
        name: 'rules',
        component: RulesView,
    },
    {
        path: '/news-paper',
        name: 'news-paper',
        component: NewsPaperView,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import('@/views/NotFoundView.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
