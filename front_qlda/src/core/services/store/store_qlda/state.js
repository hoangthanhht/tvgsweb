
import { CONFIG_ACCESS_TOKEN } from '../../constants';
export default {
    [CONFIG_ACCESS_TOKEN]: localStorage.getItem(CONFIG_ACCESS_TOKEN),
    listDataDM:[],
    currentUser: null, // Login
    users: {}, 
    stringSearch:''
}