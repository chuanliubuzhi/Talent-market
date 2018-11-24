<template>
    <div class="collect_wrap">
        <header class="header_top">
            <img @click='$router.go(-1)' class="back" src='./img/back.png' width="25" height="22">
            <span class="title">应聘职位</span>
        </header>
        <ul style="margin: 20px 10px 100px 10px">
            <li class="nw_lists" v-for='(item,index) in positionlist' :key='index' v-if='item.recruiment'>
                <div class="nwl_header"  v-if='item.recruiment'>
                    <img :src='item.recruiment.company.headimgurl' width="36px" height="36px">
                    <div class="name">
                        <p>{{item.recruiment.company.name }}</p>
                        <p>{{item.recruiment.createdDesc}}</p>
                    </div>
                </div>
                <div class="nwl_content"  v-if='item.recruiment'>
                    <p class="title">岗位描述</p>
                    <p class="intro">{{item.recruiment.description}}</p>
                </div>

                <div class="nwl_mark"  v-if='item.recruiment'>
                    <span class="fulltime">{{item.recruiment.workingType == 0 ? '不限' : item.recruiment.workingType == 1 ? '全职' : '兼职' }}</span>
                    <span class="require">{{item.recruiment.post}}</span>
                    <span class="place">{{item.recruiment.provinceName}}{{item.recruiment.cityName}}</span>
                </div>

                <!-- <div v-if='!item.recruiment'>暂无数据</div> -->
            </li>
        </ul>
    </div>
</template>

<script>
import {companyResume} from '@/api/ucenter.js'
export default {
    props: {
        collectdata: {}
    },
    created () {
        this.getcompany()
    },
    data () {
        return {
            visiblecollect: false,
            title: '',
            positionlist: {}
        }
    },
    methods: {
        show (val) {
            this.visiblecollect = true
            this.title = val
        },
        // 应聘职位列表
        getcompany () {
            companyResume().then(res => {
                if (res.data.result == 0) {
                   this.positionlist = res.data.datas.list
                   
                }
            })
        }
    }
}
</script>
<style>
.collect_wrap {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 400;
    padding-top: 46px;
    background-color: #fff;
    overflow: auto;
}
.nw_lists {
    padding: 10px 16px;
    box-shadow: 2px 2px 30px #f0eded;
    margin-bottom: 10px;
}
.nwl_header {
    display: flex;
}
.nwl_header .name {
    flex: 1;
    margin-left: 20px;
}
.nwl_mark {
    margin-top: 26px;
    margin-bottom: 23px;
}
.nwl_mark .fulltime {
    margin-left: 0;
    background: url(./img/briefcase@2x.png) 0 center no-repeat
}
.nwl_mark .require {
    background: url(./img/award@2x.png) 0 center no-repeat
}
.nwl_mark .place {
    background: url(./img/flag@2x.png) 0 center no-repeat 
}

</style>
