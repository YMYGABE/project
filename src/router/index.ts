import { createRouter, createWebHashHistory } from "vue-router";
import { constantRouter } from "./routers";
let router = createRouter({
    history: createWebHashHistory(),
    routes: constantRouter,
    scrollBehavior() {
        return {
            top: 0,
            left: 0
        }
    }

});

export default router;
