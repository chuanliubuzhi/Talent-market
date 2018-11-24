import Vue from 'vue'
import Router from 'vue-router'
import {getopenId,setopenId,removeopenId} from '@/utils/cookie.js'
import {GetUrlParam} from '@/utils/urlparse.js'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

const router = new Router({
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            redirect: '/home/recruitIndex',
        },
        // 首页
        {
            path: '/home',
            component: _import('home/index'),
            name: 'home',
            children: [
                {
                    path: 'recruitIndex',
                    component: _import('home/recruitTab'),
                    name: 'recruitIndex',
                    children: [
                        {
                            path: '/postDetail',
                            component: _import('home/postDetail'),
                            name: 'postDetail',
                        }
                    ]
                },
                {
                    path: 'employ',
                    component: _import('home/employ'),
                    name: 'employ',
                    children: [
                        {
                            path: '/employDetail',
                            component: _import('home/employDetail'),
                            name: 'employDetail',
                        }
                    ]
                },
                {
                    path: 'ucenter',
                    component: _import('home/ucenter'),
                    name: 'ucenter'
                },
                {
                    path: 'enterprise',
                    component: _import('home/enterprise'),
                    name: 'enterprise'
                },
                {
                    path: 'mycomm',
                    component: _import('home/mycomm'),
                    name: 'mycomm'
                },

            ],

        },
        {
            path: '/position',
            component: _import('ucenter/position'),
            name: 'position',
        },
        {
            path: '/employDetail',
            component: _import('home/employDetail'),
            name: 'employDetail',
        },
        // 企业设置
        {
            path: '/esetup',
            name: 'esetup',
            component:  _import('enterprise/setup')
        },
        // ucenter设置
        {
            path: '/usetup',
            name: 'usetup',
            component:  _import('ucenter/setup')
        },
        {
            path: '/enterpriseInfo',
            name: 'enterpriseInfo',
            component:  _import('enterprise/enterpriseInfo')
        },
        // 职位管理
        {
            path: '/jobmanage',
            name: 'jobmanage',
            redirect: '/jobmanage/jhistory',
            component:  _import('enterprise/jobmanage/index'),
            children: [
                {
                    path: 'jhistory',
                    name: 'jhistory',
                    component: _import('enterprise/jobmanage/jhistory')
                },
                {
                    path: 'records',
                    name: 'records',
                    component: _import('enterprise/jobmanage/records')
                },
                {
                    path: 'alljob',
                    name: 'alljob',
                    component: _import('enterprise/jobmanage/alljob')
                },
                {
                    path: 'jobdetail',
                    name: 'jobdetail',
                    component: _import('enterprise/jobmanage/jobdetail')
                }
            ]

        },
        // 发布职位
        {
            path: '/jobpost',
            name: 'jobpost',
            component: _import('enterprise/jobpost/newjob'),
            children: [
                {
                    path: 'stationame',
                    name: 'stationame',
                    component: _import('enterprise/jobpost/stationame'),
                },
                {
                    path: 'stationtype',
                    name: 'stationtype',
                    component: _import('enterprise/jobpost/stationtype'),
                }
            ]
        },
        // bole
        {
            path: '/employed',
            name: 'employed',
            component: _import('ucenter/bole/employed'),
        },
        // 评价
        {
            path: '/raters',
            name: 'raters',
            component: _import('ucenter/bole/raters')
        },
        // 求职意向
        {
            path: '/objective',
            name: 'objective',
            component: _import('ucenter/objective/objective')
        },
        {
            path: '/editIntent',
            name: 'editIntent',
            component: _import('ucenter/objective/editIntent')
        },
        // 登陆
        {
            path: '/login',
            name: 'login',
            component: _import('login/login')
        },
        // 我的简历
        {
            path:'/resume',
            name: 'resume',
            component: _import('ucenter/resume/resume'),
            // children: [
            //     {
            //         path: 'certificate',  //证书
            //         name: 'certificate',
            //         component: _import('ucenter/resume/certificate')
            //     }
            // ]
        },
        {

            path: '/certificate',  //证书
            name: 'certificate',
            component: _import('ucenter/resume/certificate')

        },
        // 我的收藏
        {
            path: '/mycollect',
            name: 'mycollect',
            component: _import('ucenter/mycollect/mycollect')
        },
        {
            path: '/collect',
            name: 'collect',
            component: _import('ucenter/mycollect/collect')
        },
        {
            path: '/archives',
            name: 'archives',
            component: _import('enterprise/tabchange/archives')
        },
        {
            path: '/library',
            name: 'library',
            component: _import('enterprise/tabchange/library')
        },
        {
            path: '/received',
            name: 'received',
            component: _import('enterprise/tabchange/received')
        },

    ]
})

router.beforeEach((to,from,next) => {
    // let openId = GetUrlParam().openId
    let openId = GetUrlParam('openId')
    // openId = to.query.openId
    if (!getopenId()) {

        setopenId(openId)
    }
    next()
})

export default router
