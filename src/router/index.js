import Vue from 'vue'
import Router from 'vue-router'
import {getopenId,setopenId,removeopenId} from '@/utils/cookie.js'
import {GetUrlParam} from '@/utils/urlparse.js'
// const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

import HomeIndex from '../views/home/index'
import HomeRecruitTab from '../views/home/recruitTab'
import HomePostDetail from '../views/home/postDetail'
import HomeEmploy from '../views/home/employ'
import HomeEmployDetail from '../views/home/employDetail'
import HomeUcenter from '../views/home/ucenter'
import HomeEnterprise from '../views/home/enterprise'
import HomeMycomm from '../views/home/mycomm'

import UcenterPosition from '../views/ucenter/position'
import UcenterSetup from '../views/ucenter/setup'
import UcenterBoleEmployed from '../views/ucenter/bole/employed'
import UcenterBoleRaters from '../views/ucenter/bole/raters'
import UcenterObjectiveObjective from '../views/ucenter/objective/objective'
import UcenterObjectiveEditIntent from '../views/ucenter/objective/editIntent'
import UcenterResumeResume from '../views/ucenter/resume/resume'
import UcenterResumeCertificate from '../views/ucenter/resume/certificate'
import UcenterMycollectMycollect from '../views/ucenter/mycollect/mycollect'
import UcenterMycollectCollect from '../views/ucenter/mycollect/collect'


import LoginLogin from '../views/login/login'

import EnterpriseSetup from '../views/enterprise/setup'
import EnterpriseEnterpriseInfo from '../views/enterprise/enterpriseinfo'
import EnterpriseJobmanageIndex from '../views/enterprise/jobmanage/index'
import EnterpriseJobmanageJhistory from '../views/enterprise/jobmanage/jhistory'
import EnterpriseJobmanageAlljob from '../views/enterprise/jobmanage/alljob'
import EnterpriseJobmanageJobdetail from '../views/enterprise/jobmanage/jobdetail'
import EnterpriseJobpostNewjob from '../views/enterprise/jobpost/newjob'
import EnterpriseJobpostStationame from '../views/enterprise/jobpost/stationame'
import EnterpriseJobpostStationtype from '../views/enterprise/jobpost/stationtype'
import EnterpriseTabchangeArchives from '../views/enterprise/tabchange/archives'
import EnterpriseTabchangeLibrary from '../views/enterprise/tabchange/library'
import EnterpriseTabchangeReceived from '../views/enterprise/tabchange/received'



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
            component: HomeIndex,
            name: 'home',
            children: [
                {
                    path: 'recruitIndex',
                    component: HomeRecruitTab,
                    name: 'recruitIndex',
                    children: [
                        {
                            path: '/postDetail',
                            component: HomePostDetail,
                            name: 'postDetail',
                        }
                    ]
                },
                {
                    path: 'employ',
                    component: HomeEmploy,
                    name: 'employ',
                    children: [
                        {
                            path: '/employDetail',
                            component: HomeEmployDetail,
                            name: 'employDetail',
                        }
                    ]
                },
                {
                    path: 'ucenter',
                    component: HomeUcenter,
                    name: 'ucenter'
                },
                {
                    path: 'enterprise',
                    component: HomeEnterprise,
                    name: 'enterprise'
                },
                {
                    path: 'mycomm',
                    component: HomeMycomm,
                    name: 'mycomm'
                },

            ],

        },
        {
            path: '/position',
            component: UcenterPosition,
            name: 'position',
        },
        {
            path: '/employDetail',
            component: UcenterEmployDetail,
            name: 'employDetail',
        },
        // 企业设置
        {
            path: '/esetup',
            name: 'esetup',
            component:  EnterpriseSetup
        },
        // ucenter设置
        {
            path: '/usetup',
            name: 'usetup',
            component:  UcenterSetup
        },
        {
            path: '/enterpriseInfo',
            name: 'enterpriseInfo',
            component:  EnterpriseEnterpriseInfo
        },
        // 职位管理
        {
            path: '/jobmanage',
            name: 'jobmanage',
            redirect: '/jobmanage/jhistory',
            component:  EnterpriseJobmanageIndex,
            children: [
                {
                    path: 'jhistory',
                    name: 'jhistory',
                    component: EnterpriseJobmanageJhistory
                },
                {
                    path: 'records',
                    name: 'records',
                    component: EnterpriseJobmanageRecords
                },
                {
                    path: 'alljob',
                    name: 'alljob',
                    component: EnterpriseJobmanageAlljob
                },
                {
                    path: 'jobdetail',
                    name: 'jobdetail',
                    component: EnterpriseJobmanageJobdetail
                }
            ]

        },
        // 发布职位
        {
            path: '/jobpost',
            name: 'jobpost',
            component: EnterpriseJobpostNewjob,
            children: [
                {
                    path: 'stationame',
                    name: 'stationame',
                    component: EnterpriseJobpostStationame
                },
                {
                    path: 'stationtype',
                    name: 'stationtype',
                    component: EnterpriseJobpostStationtype
                }
            ]
        },
        // bole
        {
            path: '/employed',
            name: 'employed',
            component: UcenterBoleEmployed
        },
        // 评价
        {
            path: '/raters',
            name: 'raters',
            component: UcenterBoleRaters
        },
        // 求职意向
        {
            path: '/objective',
            name: 'objective',
            component: UcenterObjectiveObjective
        },
        {
            path: '/editIntent',
            name: 'editIntent',
            component: UcenterObjectiveEditIntent
        },
        // 登陆
        {
            path: '/login',
            name: 'login',
            component: LoginLogin
        },
        // 我的简历
        {
            path:'/resume',
            name: 'resume',
            component: UcenterResumeResume,
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
            component: UcenterResumeCertificate

        },
        // 我的收藏
        {
            path: '/mycollect',
            name: 'mycollect',
            component: UcenterMycollectMycollect
        },
        {
            path: '/collect',
            name: 'collect',
            component: UcenterMycollectCollect
        },
        {
            path: '/archives',
            name: 'archives',
            component: EnterpriseTabchangeArchives
        },
        {
            path: '/library',
            name: 'library',
            component: EnterpriseTabchangeLibrary
        },
        {
            path: '/received',
            name: 'received',
            component: EnterpriseTabchangeReceived
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
