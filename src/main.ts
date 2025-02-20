// src/main.ts
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Import global styles (optional)
//import './assets/styles.css';

const app = createApp(App);

app.use(router);
app.mount('#app');
