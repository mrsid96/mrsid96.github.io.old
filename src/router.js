import Vue from 'vue'
import Router from 'vue-router'
import FocusContainer from '@/components/FocusContainer.vue'
import Information from '@/components/Information.vue'
import About from '@/components/Information/About.vue'
import Skills from '@/components/Information/Skills.vue'
// import Experience from '@/components/Information/Experience.vue'
import UnderConstruction from '@/components/Information/UnderConstruction.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: FocusContainer
        },
        {
            path: '/more',
            component: Information,
            children: [
                {
                    path: '/',
                    redirect: "about"

                }, {
                    path: 'about',
                    component: About
                }, {
                    path: 'skills',
                    component: Skills
                }, {
                    path: '/*',
                    component: UnderConstruction
                }
            ]
        }
    ]
});
