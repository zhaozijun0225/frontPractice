// 1.创建路由表
import Home from "../components/Home.vue";
import Haha from "../components/Haha.vue";
import {createRouter, createWebHashHistory} from 'vue-router'
import User from "../views/user/User.vue";
import UserProfile from "../views/user/UserProfile.vue";
import UserPosts from "../views/user/UserPosts.vue";
// :xxx是路径变量
const routes = [
    {path:"/",component:Home},
    {path:"/haha/:id",component:Haha},
    {path:"/hello",component:()=>import("../views/Hello.vue")},
    {
        path:'/user/:id',
        component: User,
        children:[
            {
                //  /表示从当前项目开始，我们需要相对路径，所以不加/
                path:'profile',
                component:UserProfile,
            },
            {
                path: 'posts',
                component: UserPosts
            }
        ]
    }
]
// 2.创建路由器
const router = createRouter({
    // history是router的模式
    history:createWebHashHistory(),
    // 因为名字一样,可以简写为一个单独的routes
    routes: routes,

});


// 3.导出路由器
export default router

// 4.在main.js里让vue挂载路由表
