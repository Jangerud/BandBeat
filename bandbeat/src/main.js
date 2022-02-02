import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { projectAuth } from './firebase/config'

let app

// This function is used in order to prevent the user from being logged out if the user simply updates the account page.
projectAuth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App).use(router).mount('#app')
    }
})


