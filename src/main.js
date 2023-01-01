import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import loader from '@/components/AppLoader.vue';
import '@/libs/userIp.js';
import '@/libs/titleTab.js';
import lazyLoad from '@/directives/lazyLoad.js';
import tooltips from '@/directives/tooltips.js';
import '@/assets/scss/main.scss';

const app = createApp(App);

app.use(router);
app.use(store);

app.component('AppLoader', loader);
app.directive('lazy', lazyLoad);
app.directive('tooltip', tooltips);

app.mount('#app');
