import axiosInstance from '../../plugins/axios';

export default {
    async getListPostHasPaging({ commit }) {
        
        var config = {
            headers:{
                'Accept': 'application/json',
                'Authorization' :'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNzdiMmNmMGNjZGFmMDRmODNlMGM5MmJmNWJmMGIyMDEzNGJlZDc3OGQ4Zjk2YmI0ZmY1OTllNmFlNzFjYWFjZDk0OTFiOTI0MDUzMTMyYmQiLCJpYXQiOjE2MjE4NjYwMTkuMjgzODQyLCJuYmYiOjE2MjE4NjYwMTkuMjgzODQyLCJleHAiOjE2NTM0MDIwMTkuMjc5ODQxLCJzdWIiOiIzIiwic2NvcGVzIjpbXX0.DnQ-FwR1GLAJmWHbRcaEWcpVdQA5MtyLXKmTDq1qSDv0Y5q1WNzegS15GdsiiXK_QO6RzIcXfYcBcdQ2XFwl5dL4KJPkd34I85G9iFcouUrAtFy3HoVVyMA80_UGTYUbroK0OcdP2u7P5qFxoPkJc3rmuYrdLnsGN0V_7UOgnw87xQsAlyzsnM5svERnvh5Z8Eo6LUmzpqG5Z4dxoQFA6ShpR-kvyOkLGVZ2weFwvxJU42r1ZbKWpsZgzDj7pxgRCRQis7wBn-gDB5th88aRe58djZE4A22C1RYOSsUR-GcianT3lmyzkIXtRDxXgG--Rs6w2J7tO4LtqxLF3lkfsJM4HXaQe1DbaRvcoQ3xlpthQR5kNhTEsTap2pqUO421wEDrN7bCsYi5UpIDJlIbXRjO9uxW8FOGJ7MeUMAE95rbXPnfFDANDOOmjgR9BX8OfdprKusLuoYRZOxWT-145UttIZ_DFwjWl2cszxwGID-pGyLlE-2lfazbSAl2PhHJJYxZJ9LMLoYVq2xBpDbVHRDccPUYSfB8RiQPI7nykUTBfBXdLPoSSjfIbO3Ta5FiY2zkIg15oPmRVDlrejVyGkjzY99xUb-6YriX8njK7YtDzEUsAJEF85hnc70GrY2eTadiRr3piE72t-A6goUQRqKEy5mCwk5Gy36tpovBaGY',
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