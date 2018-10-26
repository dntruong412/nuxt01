import axios from 'axios';
import Cookies from 'js-cookie';
import appConfig from '~/config/app';
import types from './types';

const axiosInstance = axios.create({
    baseURL: appConfig.api.base,
    timeout: 0
});

export default {
    state: {
        state: false,
        user: {},
        token: null
    },
    mutations: {
        [types.LOGIN](state, data) {
            state.state = true;
            state.user = data.user;
            state.token = data.token;
        },
        [types.LOGOUT](state) {
            state.state = false;
            state.user = {};
            state.token = null
        }
    },
    actions: {
        [types.LOGIN]({ commit }, data) {
            return axiosInstance.post(appConfig.api.login, data, {
                headers: { 'Content-Type': 'multipart/form-data' }
            }).then(response => {
                commit(types.LOGIN, response.data);
                Cookies.set('token', response.data.token);
                return response.data;
            }).catch(error => error.response.data);
        },
        [types.LOGOUT]({ commit }) {
            commit(types.LOGOUT);
            Cookies.remove('token');
        }
    }
}
