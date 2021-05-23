import axiosInstance from '../../plugins/axios';

export default {
    async getListPostHasPaging({ commit }) {
        
        // var config = {
        //     headers:{
        //         'Accept': 'application/json',
        //         'Authorization' :'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYWFiNDZjYTU5N2NlOGJlYjU2YTk4MTBlOGY5ZjYwMzhiY2Y1MTUwMDQ1YTg1MDA4MjQ5NTI1MTZlZWU3ZDQxZWY2MjBiNmI4NWMwZDAxN2EiLCJpYXQiOjE2MjE3NzkzMTIuODc0NTIzLCJuYmYiOjE2MjE3NzkzMTIuODc0NTIzLCJleHAiOjE2NTMzMTUzMTIuODQ4NTIyLCJzdWIiOiI5Iiwic2NvcGVzIjpbXX0.OayImbpJV_nqKT3uhYIk3shvC06xXFGr6O6yYjGEi2PnlIYG8WzGSlbAVWPB-GeCPxOYphCryVDOLJk8Rspu4DkOIm2XzUi8rTUraPG8ZddZcyx7LefIkv2QhuGQ-PYv2Cn1UqmEV9mp1cRhVSVs14yotZXzwu0JAQQl4FC5aUB9DEBO9qKTnjVG6TwR5RfG9V1r1bHil7Ps29gzruoI2cPxHRSyKlcOrlxAvYAc5_rHzrxcAFENfQIdNIG6LZL0OndYfNwqMX-145LEF1KkUaekzBWcbDIxoTCk0F7V8IkUphLoQuhWx0yt5Qw1GGHyeJphCzOVT2VvGA53_CK3DPzKazhj06EYTtzgg7r0PNQwyos7TytEAriywKGZinyiZ2ZeVuGYxqb2ss0qnNw67JZEFqORtoypaVxMIzCMNX8eKqkwB-eOT1FnUM-RzqqD1hrYTg3BCYdK9TiuOiMvOQY_hkEtwwUjO6jw84MaK_wkjMQ6XcadJoHWUT8PxObTY8EIYYEVZa9VI0R4nbjHy_bRpb3mkpuinmjUWwFm7Nb7TRxSl0GEGZdj6HZpdtSJ4OulKJ0bQ9EpGpa7mryzT_mBO_q5CjoVWp3D_V4IuhWljJsXAGP-og6YQ1hakOpPHbFrHe2M1LB1FVSeT4yPKSFNd3IoBVCPaEcFvnPG4aY',
        //     }
        // }
        var data = {
            'email': 'admin77777@gmail.com',
            'password':'12345678'
        }
        try {
            console.log('api run');
            var result = await axiosInstance.post('/login',data);
            console.log(result);
            // commit('SET_LIST_POSTS',result.data)
        } catch(error) {
            console.log("error", error);
        }
    }
}