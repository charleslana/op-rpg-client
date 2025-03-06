import {createApp} from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import 'rpg-awesome/css/rpg-awesome.min.css';
import 'bulma/css/bulma.css';
import {createPinia} from 'pinia';
import {
    faEye,
    faEyeSlash,
    faGlobe,
    faKey,
    faLock,
    faRightToBracket,
    faUnlock,
    faUser,
    faUserPlus,
    faUsers
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
    faGlobe
);

const app = createApp(App);

app.use(createPinia());

app.use(router);

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
