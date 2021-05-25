import axiosInstance from '../../plugins/axios';

export default {
    async getListPostHasPaging({ commit }) {
        
        var config = {
            headers:{
                'Accept': 'application/json',
                'Authorization' :'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiNTMwMWE4YTM3NmRiZmQyNzNiYjc2MzYyNzQ5ZmVlMWRmZTMwZTMzNzFmNDkzOGE5ZTEyYzlmMDI2OTdlZjY2ODk3OGFlMGQyNDJhZGVmYzUiLCJpYXQiOjE2MjE5MDM3MzEuNzEyNzA0LCJuYmYiOjE2MjE5MDM3MzEuNzEyNzEyLCJleHAiOjE2NTM0Mzk3MzEuNjgxNjQ4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.IxraA9GZ0zK2IC_nep_RgFUN9hs5RWmWDWbmr_cHC3YF8MHWa_LUzv3x31x2YkKxbZcd6UrCV89SBgCJKkl2rjgUUHHh6PWxjvhT56_biHl1fGhB9qUD-0lLR9ejtFohs09fOVulvZxaQtNhxoJczhEhO0vWduW2OV8qe1QX2KwAr7WiXkHk6S2bJoasp4mFD35iBeW8hO3C3biGAEo93fsPsE7X4P9Yos-DPUhg2Pmz8NlxW_MH4pcxni_9N4UNCUgNrn62X4mX13VusMWuN9AgyOhNDzwOlQHzhyQOM6Xy0hDbpTajH0ogtLOC_nHLoKaVX07BvhTauFFJSKiRn97mq0IyBcdzrWWYUnNf5arWpU6-ghBGYMVcqw9v3r4MgmtW5xcwzAmivlo2XI32783pHuQns50vztAYUYDaGy7ZT-of3k3bhiFPON_CHvZESFbbpVre28yXaPMJi73qqsvstOCUM6Qs3eYDYVYWZzWu2Zas9qNkA9VmeggjJkmWM6-hbJ_vJFeYlIryT7kC5rbgpuaaqeLPN2i_iAXi677Yc5HA84iF_wT2ByrrhQgx2ipTLY25wlPAVxahIk0-r9iRvb4ldhkD9iLE6Yn7VI8ZovlzqkwlzHF0w53pRdZwjm_gmZWM9znpsSf3cmqsbVy6pI903abwh8LIiRMJ1Bs',
            }
        }
        // var data = {
        //     'email': 'admin77777@gmail.com',
        //     'password':'12345678'
        // }
        try {
            console.log('api run');
            var result = await axiosInstance.get('/post/bcday',config);
            
             commit('SET_LIST_POSTS',result.data)
             console.log(this.$store);
        } catch(error) {
            console.log("error", error);
        }
    }
}