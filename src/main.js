import { createApp } from 'vue'
import App from './App.vue'
import Vuex, {createStore} from 'vuex'
import {router} from "@/router/router";

const store = createStore({
    state () {
        return {
            count: 1
        }
    }
})

const app = createApp(App).use(router).use(Vuex).mount('#app')

app.use(store)