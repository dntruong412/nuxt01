import Vuex from 'vuex';
import auth from './auth';
import categories from './categories';
import products from './products';

export default function() {
    return new Vuex.Store({
        modules: {
            namespaced: true,
            auth: auth,
            categories: categories,
            products: products
        }
    })
}
