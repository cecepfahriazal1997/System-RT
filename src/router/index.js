import { createRouter, createWebHashHistory } from 'vue-router'
import stores from '../stores'

import apiEnpoint from '../services/api-endpoint'
import { ApiCore } from '../services/core'

import Home from '../views/Home.vue'
import Signin from '../views/authentication/Signin.vue'

// Master Data
import ListEducation from '../views/master-data/education/List.vue'

import NotFound from '../views/404.vue'

const nameApplication = import.meta.env.VITE_APP_TITLE

const routes = [
    // routes general
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            title: `${nameApplication} | Home`,
            footer: true,
            navbar: true,
        }
    },
    {
        path: '/notfound',
        name: 'notfound',
        component: NotFound,
        meta: {
            title: `${nameApplication} | Not Found`,
            footer: false,
            navbar: false,
        }
    },
    {
        path: '/signin',
        name: 'signin',
        component: Signin,
        meta: {
            title: `${nameApplication} | Login`,
            footer: false,
            navbar: false,
        }
    },
    {
        path: '/master-education',
        name: 'education',
        component: ListEducation,
        meta: {
            title: `${nameApplication} | Master Pendidikan`,
            footer: true,
            navbar: true,
        }
    },
    {
        path: '/master-education-form/:id',
        name: 'education.form',
        component: ListEducation,
        meta: {
            title: `${nameApplication} | Master Pendidikan`,
            footer: true,
            navbar: true,
        }
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
    linkActiveClass: 'active',
    scrollBehavior() {
        return { top: 0, left: 0 }
    }
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;

    const localData = localStorage.getItem('token')
    const tmpRole = localStorage.getItem('role') || ''

    const authRequired  = ['signin', 'signup'].includes(to.name);
    const role = to.meta.role || ''

    let isAllow = true

    if (role) {
        if (role != tmpRole)
            isAllow = false
    }

    if (isAllow) {
        if (localData && !authRequired) {
            next()
            // ApiCore.get(`${apiEnpoint.ACCOUNT}/info`, null, false)
            //         .then((response) => {
            //             if ('status' in response && !response.status) {
            //                 localStorage.removeItem('token')
            //                 next({name: 'home'})
            //             } else {
            //                 stores.commit('setuser', response)
            //                 next()
            //             }
            //         })
            //         .catch(() => {})
        } else {
            if (to.path == '/') {
                next({name: 'signin'})
            } else {
                next()
            }
        }
    } else {
        next({name: 'notfound'})
    }
})

export default router
