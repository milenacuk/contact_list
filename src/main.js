import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ContactList from './components/ContactList.vue';  //importujemo ContactList komponentu
import AddContact from './components/AddContact.vue'
import ContactDetails from  './components/ContactDetails.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);


const routes = [
  { path: '/', redirect:'/contacts' },
  { path: '/contacts', component: ContactList},
  { path: '/add-contact', component: AddContact},
  { path: '/contacts/:id', component: ContactList, name: 'contact-details'}
  
];  //ovde slazemo rute

const router = new VueRouter({
  routes
});
//pravimo instancu rutera i stavljamo u konstantu router da ne pravimo direktno,konstruktoru prosledjujemo rute

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
//instanci vue prosledjujemo rute