import axiosInstance from '../../plugins/axios';

export default {
    async getListPostHasPaging({ commit }) {
        
        try {
            console.log('api run');
            var result = await axiosInstance.get('/v1/products');
            commit('SET_LIST_POSTS',result.data)
        } catch(error) {
            console.log("error", error);
        }
    }
}