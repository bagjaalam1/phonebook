import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"

const app = createApp(App)

const store = createStore({
    state() {
        return {
            contacts: []
        }
    }
})

app.use(store)
app.mount('#app')
