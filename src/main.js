import '@/scss/style.scss';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/styles';
import App from './App.vue';
import router from './router';

const app = createApp(App);

const vuetify = createVuetify({
  components,
  directives,
});

app.use(vuetify);
app.use(createPinia());
app.use(router);

app.mount('#app');