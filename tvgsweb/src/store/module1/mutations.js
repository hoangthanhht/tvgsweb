
import Vue from 'vue';
import { CONFIG_ACCESS_TOKEN } from '../../constants';

export default {
    // increment (state) {
    //     state.count++
    // }
    SET_USER_INFO(state, user) {
        console.log('SET_USER_INFO',user);
        Vue.set(state.users, user.id, user);
    },
    SET_LOGIN_INFO(state, { user = null, token = '' }) {
        // xs
        localStorage.setItem(CONFIG_ACCESS_TOKEN, token);
        state[CONFIG_ACCESS_TOKEN] = token;
        state.currentUser = user;
    },
    SET_LIST_POSTS(state, data) {
        state.listReport = data;
    },  
    SET_LOGOUT(state) {
        state[CONFIG_ACCESS_TOKEN] = '';
        state.currentUser = null;
        localStorage.removeItem(CONFIG_ACCESS_TOKEN);
    },
}

// TH nếu current = 1 -> Thay thế array gốc 
// TH nếu current = 2, 3, 4 -> Đẩy thêm dữ liệu vào ( nối 2 array lại với nhau )