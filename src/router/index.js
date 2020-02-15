import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const Home = () => import("views/home/Home")
const Article = () => import("views/article/Article")
const Qa = ()=> import("views/qa/Qa")
const Soft = () => import("views/soft/Soft")
const Login = () => import("views/login/Login")

const routes = [
    {
        path: "",
        redirect: "/home"
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/home",
        component: Home
    },
    {
        path: "/article",
        component: Article,
        children: [
            {
                path: "",
                component: () => import("views/article/ArticleHome")
            },
            {
                path: "details",
                component: () => import("views/article/ArticleDetails")
            }
        ]
    },
    {
        path: "/qa",
        component: Qa,

    },
    {
        path: "/soft",
        component: Soft
    }
]

const router = new VueRouter({
    routes,
    mode: "history"
})

export default router