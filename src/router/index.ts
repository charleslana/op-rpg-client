import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import RegisterView from '@/views/RegisterView.vue';
import RecoveryPasswordView from '@/views/RecoveryPasswordView.vue';
import TOSView from '@/views/TOSView.vue';
import RulesView from '@/views/RulesView.vue';
import NewsPaperView from '@/views/NewspaperView.vue';
import AttributesView from '@/views/AttributesView.vue';
import SettingsView from '@/views/SettingsView.vue';
import NewspaperDetailsView from '@/views/NewspaperDetailsView.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {title: getTitle('Aventuras sem limites')}
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterView,
        meta: {title: getTitle('Cadastro')}
    },
    {
        path: '/recovery-password',
        name: 'recovery-password',
        component: RecoveryPasswordView,
        meta: {title: getTitle('Recuperar senha')}
    },
    {
        path: '/tos',
        name: 'tos',
        component: TOSView,
        meta: {title: getTitle('Termos de serviço')}
    },
    {
        path: '/rules',
        name: 'rules',
        component: RulesView,
        meta: {title: getTitle('Regras')}
    },
    {
        path: '/newspaper',
        name: 'newspaper',
        component: NewsPaperView,
        meta: {title: getTitle('Jornal')}
    },
    {
        path: '/newspaper/:uuid',
        name: 'newspaper-details',
        component: NewspaperDetailsView,
        meta: {title: getTitle('Jornal')}
    },
    {
        path: '/attributes',
        name: 'attributes',
        component: AttributesView,
        meta: {title: getTitle('Atributos')}
    },
    {
        path: '/settings',
        name: 'settings',
        component: SettingsView,
        meta: {title: getTitle('Configurações')}
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
    scrollBehavior(_to, _from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        return {top: 0};
    }
});

interface RouteMeta {
    title?: string;
}

function getTitle(title?: string): string {
    if (title) {
        return `OPRPG - ${title}`;
    }
    return 'OPRPG';
}

router.beforeEach((to, _from, next) => {
    const meta = to.meta as RouteMeta;
    if (meta && meta.title) {
        document.title = meta.title;
    } else {
        document.title = getTitle();
    }
    next();
});

export default router;
