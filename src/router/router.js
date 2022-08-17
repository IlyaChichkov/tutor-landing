import {createRouter, createWebHashHistory} from "vue-router/dist/vue-router";
import HomePage from "@/components/HomePage";
import StudyPage from "@/components/StudyPage";
import ContactPage from "@/components/ContactPage";

const routes = [
    {path: '/', name: 'Home', component: HomePage},
    {path: '/study', name: 'Study', component: StudyPage},
    {path: '/contacts', name: 'Contacts', component: ContactPage},
]

export const router = createRouter({
        history: createWebHashHistory(),
        routes
})