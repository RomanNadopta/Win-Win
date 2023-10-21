import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import {
  faStar,
  faUpload,
  faTruck,
  faGifts,
  faHourglass2,
  faAngleDown,
  faAngleUp,
} from '@fortawesome/free-solid-svg-icons';

import {
  faFacebook,
  faLinkedin,
  faTelegram,
  faSquareInstagram,
} from '@fortawesome/free-brands-svg-icons';

/* add icons to the library */
library.add([
  faStar,
  faUpload,
  faFacebook,
  faLinkedin,
  faTelegram,
  faSquareInstagram,
  faTruck,
  faGifts,
  faHourglass2,
  faAngleDown,
  faAngleUp,
]);
let app;

store.dispatch('user/ON_AUTH_CHANGE', () => {
  if (!app) {
    app = createApp(App);

    app.use(router);
    app.use(store);
    app.use(Toast);
    app.component('font-awesome-icon', FontAwesomeIcon);
    app.mount('#app');
  }
});
