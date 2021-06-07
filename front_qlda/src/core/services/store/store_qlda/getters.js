
import { CONFIG_ACCESS_TOKEN } from '../../constants';
export default {
    // test: state => {
    //     return state
    // }
    isLogin: state => {
        if(state[CONFIG_ACCESS_TOKEN]) {
            return true;
        } else {
            return false;
        }
    },
    getListDataDinhMuc: state => {
        return state.listDataDM;
    },
    getTokenStorage: state => {
        return state[CONFIG_ACCESS_TOKEN];
    },
    currentUser: state => {
        return state.currentUser;
    },
    arrDmSearch: state => {
        const { stringSearch } = state
        var newArr = state.listDataDM.filter(item => {
            let rs = item.tenMaDinhMuc.toLowerCase().includes(stringSearch.toLowerCase());
            if(rs == false) {
                rs = item.maDinhMuc.toLowerCase().includes(stringSearch.toLowerCase());
            }
            return rs;
        });
        return newArr;
    }
}