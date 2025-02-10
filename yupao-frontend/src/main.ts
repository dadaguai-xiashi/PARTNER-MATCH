import { createApp } from 'vue'
import App from './App.vue'
// import Vant from 'vant';
import { Button } from 'vant';
import { NavBar } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
const app = createApp(App);
app.use(Button);
app.use(NavBar);
app.use(Tabbar);
app.use(TabbarItem);
// app.use(Vant);
app.mount('#app')




