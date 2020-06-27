import Vue from 'vue'
import App from './App.vue'
import "@/assets/style.css"
import "@/assets/style.scss"
import router from './router'
import * as firebase from 'firebase';

Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAfftIb1daTuGvputUlU1LdHSFQSsrY_Ns",
  authDomain: "portfolio-1b3d4.firebaseapp.com",
  databaseURL: "https://portfolio-1b3d4.firebaseio.com",
  projectId: "portfolio-1b3d4",
  storageBucket: "portfolio-1b3d4.appspot.com",
  messagingSenderId: "321246014449",
  appId: "1:321246014449:web:b0bae2ea77a6522cc93250",
  measurementId: "G-60ET1GEPDS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
