import axiosInstance from '../../plugins/axios';
import { CONFIG_ACCESS_TOKEN } from '../../constants';
export default {
    async getListReport({ commit },token = '') {
        var config = {
            headers:{
                'Accept': 'application/json',
                'Authorization' :'Bearer ' + token,
            }
        }
        // var data = {
        //     'email': 'admin77777@gmail.com',
        //     'password':'12345678'
        // }
        try {
           
            var result = await axiosInstance.get('/post/bcday',config);
             commit('SET_LIST_POSTS',result.data)
            
        } catch(error) {
            console.log("error", error);
        }
    },
    async getUserWithId({ commit },token = '') {
        console.log('SET_USER_INFO1',token);
        var config = {
            headers:{
                'Accept': 'application/json',
                'Authorization' :'Bearer ' + token,
            }
        }
       
        try {
           
            var result = await axiosInstance.get('/details',config);
            console.log('getUserWithId',result)
            if(result.status === 200) {
                commit('SET_USER_INFO', result.data.user);
                return {
                    ok: true,
                    data: result.data.user,
                    error: null
                }
            }
            return {
                ok: false,
                error: result.message
            }
        } catch(error) {
            
            return {
                ok: false,
                error: error.message
            }
        }
    },
    async login({ commit, dispatch }, { email = '', password = '' }) {
        // commit('SET_LOADING', true);
        try {
            let data = {
                email: email,
                password: password
            }
            var result  = await axiosInstance.post('/login', data);

           
            // commit('SET_LOADING', false);
            if(result.status === 200) {
                let resultUser  = await dispatch('getUserWithId', result.data.token);
                commit('SET_USER_INFO', resultUser.data);
                commit('SET_LOGIN_INFO',{ user:resultUser.data, token:result.data.token } );

                // dispatch('getListPostsByUserId', result.data.user.USERID);

                return {
                    ok: true,
                    error: null,
                    data: result.data
                }
                
            } else {
                return {
                    ok: false,
                    error: result.data.error
                }
            }
            
        } catch(error) {
            console.log('error');
            
            // commit('SET_LOADING', false);
            return {
                ok: false,
                error: error.message
            }
        }
    },

    async register({ commit, dispatch }, { email = '', password = '',name }) {
        // commit('SET_LOADING', true);
        try {
            let data = {
                email: email,
                password: password,
                name:name
            }
            var result  = await axiosInstance.post('/register', data);

           
            // commit('SET_LOADING', false);
            if(result.status === 200) {
                let resultUser  = await dispatch('getUserWithId', result.data.token);
                commit('SET_USER_INFO', resultUser.data);
                commit('SET_LOGIN_INFO',{ user:resultUser.data, token:result.data.token } );

                // dispatch('getListPostsByUserId', result.data.user.USERID);

                return {
                    ok: true,
                    error: null,
                    data: result.data
                }
                
            } else {
                return {
                    ok: false,
                    error: result.data.error
                }
            }
            
        } catch(error) {
            console.log('error');
            
            // commit('SET_LOADING', false);
            return {
                ok: false,
                error: error.message
            }
        }
    },
    async logout({ commit }) {
        commit('SET_LOGOUT');
        return null
    },
    async checkLogin({ commit, dispatch }) {
        try {
            let tokenLocal = localStorage.getItem(CONFIG_ACCESS_TOKEN);
           
            if(tokenLocal) {
                // let resultUser      = await dispatch('getUserById', userObj.id);
                // let resultPostUser  = await dispatch('getListPostsByUserId', userObj.id);
                let promiseUser         = await dispatch('getUserWithId', tokenLocal);
                //let promisePostUser     = dispatch('getListPostsByUserId', userObj.id);

                //let [resultUser, resultPostUser] = await Promise.all([ promiseUser, promisePostUser ]);

                // Dòng 73 chạy 3s
                // Dòng 74 chạy 4s
                // Tổng lại chúng ta phải chờ 7s 
                // Hai API trên chạy riêng lẽ được hay không?

                // Nếu 2 API trên chạy đồng thời -> tổng thời gian chờ chỉ là 4s thôi
                if(promiseUser.ok) {
                    let data = {
                        user: promiseUser.data,
                        token: tokenLocal
                    }
                    commit('SET_LOGIN_INFO', data);
                    return {
                        ok: true,
                        error: null
                    }
                }
            }
            return {
                ok: false
            }
            
        } catch(error) {
            return {
                ok: false,
                error: error.message
            }
        }
    },
}