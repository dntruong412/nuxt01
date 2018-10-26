import axios from 'axios';
import appConfig from '~/config/app';
import types from './types';

const axiosInstance = axios.create({
    baseURL: appConfig.api.base,
    timeout: 0
});

export default {
    state: {
        single: {},
        list: {}
    },
    mutations: {
        [types.PRODUCT_GET_LIST](state, list) {
            state.list = list;
        },
        [types.PRODUCT_GET_SINGLE](state, single) {
            state.single = single;
        }
    },
    actions: {
        async [types.PRODUCT_GET_LIST]({ commit }, condition) {
            try {
                let response = await axiosInstance.get(appConfig.api.products, {
                    params: condition
                });
                commit(types.PRODUCT_GET_LIST, response.data);
            } catch (e) {
                console.log(e);
            }
        },
        [types.PRODUCT_GET_SINGLE]({ commit }, condition) {
            return axiosInstance.get(appConfig.api.products, {
                params: condition
            }).then((response) => {
                commit(types.PRODUCT_GET_SINGLE, response.data);
            }).catch((e) => {
                console.log(e);
            });
        }
    }
}