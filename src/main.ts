import {createApp} from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import 'rpg-awesome/css/rpg-awesome.min.css';
import 'bulma/css/bulma.css';
import './assets/libs/bulma-list.css';
import {createPinia} from 'pinia';
import {
    faArrowLeft,
    faArrowUp,
    faBatteryFull,
    faCirclePlus,
    faCoins,
    faCrown,
    faDollarSign,
    faEnvelope,
    faEye,
    faEyeSlash,
    faGift,
    faGlobe,
    faIdBadge,
    faKey,
    faLock,
    faNewspaper,
    faPaperPlane,
    faRightToBracket,
    faStar,
    faUnlock,
    faUser,
    faUserPlus,
    faUsers,
    faWater,
    faRightFromBracket,
    faXmark,
    faBars
} from '@fortawesome/free-solid-svg-icons';
import {faClock as farClockRegular} from '@fortawesome/free-regular-svg-icons';
import {faDiscord} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';

library.add(
    faKey,
    farClockRegular,
    faDiscord,
    faUser,
    faLock,
    faEye,
    faEyeSlash,
    faRightToBracket,
    faUserPlus,
    faUnlock,
    faUsers,
    faGlobe,
    faIdBadge,
    faEnvelope,
    faWater,
    faArrowLeft,
    faPaperPlane,
    faGift,
    faCirclePlus,
    faNewspaper,
    faArrowUp,
    faStar,
    faBatteryFull,
    faCoins,
    faDollarSign,
    faCrown,
    faRightFromBracket,
    faXmark,
    faBars
);

const app = createApp(App);

app.use(createPinia());

app.use(router);

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
