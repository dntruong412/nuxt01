import axios from 'axios';
import appConfig from '~/config/app';
import types from './types';

const axiosInstance = axios.create({
    baseURL: appConfig.api.base,
    timeout: 0
});

export default {
    state: {
        list: {}
    },
    mutations: {
        [types.CATEGORY_GET_ALL](state, list) {
            state.list = list;
        }
    },
    actions: {
        async [types.CATEGORY_GET_ALL]({ commit }) {
            try {
                let response = await axiosInstance.get(appConfig.api.categories);
                commit(types.CATEGORY_GET_ALL, response.data);
            } catch (e) {
                console.log(e);
            }
        }
    }
}
