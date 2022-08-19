import { createApp } from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import {router} from "@/router/router";
import {VuexStorage} from './store/vuex-storage'

createApp(App).use(VuexStorage).use(Vuex).use(router).mount('#app')
