import Vue from "vue";
import Vuex from "vuex";

import auth from "./store_metronic/auth.module";
import htmlClass from "./store_metronic/htmlclass.module";
import config from "./store_metronic/config.module";
import breadcrumbs from "./store_metronic/breadcrumbs.module";
import profile from "./store_metronic/profile.module";
import storeqlda from "./store_qlda";

Vue.use(Vuex);
const store = new Vuex.Store({
    modules: {
        auth,
        htmlClass,
        config,
        breadcrumbs,
        profile,
        storeqlda
      }
});
export default store;
