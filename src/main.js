import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

var config = {
  apiKey: "AIzaSyAgjyVFrM8yLI73SYKlwEJYSQqfBvQguuA",
  authDomain: "my-address-pj-vue-tutrial.firebaseapp.com",
  databaseURL: "https://my-address-pj-vue-tutrial.firebaseio.com",
  projectId: "my-address-pj-vue-tutrial",
  storageBucket: "my-address-pj-vue-tutrial.appspot.com",
  messagingSenderId: "521325962108",
  appId: "1:521325962108:web:95821bb17b67b086b73af9",
  measurementId: "G-G32EXSDZGM",
};
// Initialize Firebase
firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')