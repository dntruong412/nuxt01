import Vue from 'vue';
import Cookies from 'js-cookie';

const Hello = {
    install(Vue, options) {
        Vue.$abc = 123;

        Vue.prototype.$getToken = function () {
            console.log(Cookies.get('token'));
        }
    }
}

Vue.use(Hello);
