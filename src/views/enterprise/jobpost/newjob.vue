<template>
    <div class="enterpriseInfo_wrap">
        <div class="ew-item">
            <h2>岗位类别</h2>
            <div class="ewn_right" @click="$refs.stationtype.byShow = true">
                <span>{{jobCategoryname}}</span>
                <router-link to='' class="jump"></router-link>
            </div>
         </div>
        <div class="ew-item">
            <h2>岗位名称</h2>
            <div class="ewn_right" @click="$refs.stationame.byShow = true">
                <span>{{fdata.post}}</span>
                <router-link to='' class="jump"></router-link>
            </div>
            <p class="subtitle">性别</p>
            <group>
                <radio :options="sexoptions" v-model="fdata.sex" :max=1 :selected-label-style="{color: '#4ee1d1'}"></radio>
            </group>
            <!-- <div class="radio_group" style="padding-left: 20px">
                <span><input type="radio" v-model="fdata.sex"  value="1">男</span>
                <span><input type="radio" v-model="fdata.sex" value="2">女</span>
                <span><input type="radio" v-model="fdata.sex" value="0">不限</span>
            </div> -->

        </div>

        <div class="ew-item">
            <h2>工作地点</h2>
            <!-- 二级地区组件 -->
            <div style="margin-top: 20px">
               <v-site :a='false' @sitechange='sitechange'></v-site> 
            </div>
            


            <p class="subtitle">工作性质</p>
            <div class="radio_group" style="padding-left: 20px">

                <span><input type="radio" v-model="fdata.workingType" value="1">全职</span>
                <span><input type="radio" v-model="fdata.workingType" value="2">兼职</span>
                <span><input type="radio" v-model="fdata.workingType" value="0">不限</span>                
            </div>

            <p class="subtitle">岗位描述</p>

            <textarea rows='6' class="describe" v-model="fdata.description"></textarea>
         </div>

        <div class="ew-item">
            <h2>项目名称</h2>
            <input type='text' class="project_name" v-model="fdata.projectName">
            <!-- 时间组件 -->
            <p class="subtitle" style="padding-bottom: 0">时间</p>
            <v-time @timechange='timechange'></v-time>

            <!-- 地区组件 -->
            <p class="subtitle">项目地点</p>
            <v-site @sitechange='projectchange'></v-site>

            <p class="subtitle">项目描述</p>
            <textarea rows='7' class="describe" v-model="fdata.projectDesc"></textarea>
        </div>


        <div class="ew_footer">
            <span>保存</span>
            <span @click="post">提交</span>
        </div>


        
        <stationtype ref='stationtype' :posttype='posttype' @choosetype='choosetype' @updata='getposttype'></stationtype>
        <stationame ref='stationame' :postname='postname' @choosename='choose' @updata='getpostname'></stationame>      
    </div>
</template>

<script>
import VTime from '@/components/time.vue'
import VSite from '@/components/site.vue'
import stationame from '@/views/enterprise/jobpost/stationame'
import stationtype from '@/views/enterprise/jobpost/stationtype'
import { listByTypeAndPid } from '@/api/dictionary'
import { postjob, findOneCompany } from '@/api/company.js'
export default {
    components: {
        VTime,
        VSite,
        stationame,
        stationtype
    },
    created () {
        this.getposttype()
        this.getpostname()
        this.getcertificate()
        this.getCompany()
    },
    data () {
        return {
            sexoptions: [{key: '1', value: '男'}, {key: '2', value: '女'}],
            posttype: [],
            postname: [],
            showstationame: false,
            showstationtype: false,
            jobCategoryname: '',
            fdata: {
                jobCategoryId: '', // 岗位类别id
                post: '', //岗位名称
                certMajorL1Id: Number,//	上岗证专业一级ID	int	是
                certMajorL2Id: Number,//	上岗证专业二级ID	int	是
                description: '',//	详细描述	string	是	提示输入：职称、毕业证等级及专业要求等
                workingType: 0,//	工作性质，全职或者兼职	int	是	值为1时是要求全职 值为2时是要求兼职 值为0时是不限
                sex: 0,//	性别要求	int	否	值为1时是要求男性值为2时是要求女性值为0时是不限
                province:'',//	工作地点所在省份编码	string	是
                city: '',//	工作地点所在城市编码	string	是
                contactName:'',//	联系人	string	是
                email: '',//	联系邮箱	string	是
                cellNumber: '', //	联系电话	string	是
                projectProvince: '',//	项目所在省份编码	string	否
                projectCity:'',//	项目所在城市编码	string	否
                projectCountry: '', //	项目所在城市编码	string	否
                projectName:'',//	项目名称	string	否
                projectDesc:'',//	项目描述	string	否
                startTime: '',//	项目开工时间	string	否
                endTime: '',//	项目竣工时间	string	否
            }
            
        }
    },
    methods: {
        // 发布岗位
        post () {
            // console.log(this.fdata)
            // postjob(this.fdata).then(res => {
            //     if (res.data.result == 0) {

            //     }
            // })
        },
        getposttype () {
            listByTypeAndPid(1,0).then(res => {
                if (res.data.result == 0) {
                    this.posttype = res.data.datas
                }
            })
        },
        getpostname () {
            listByTypeAndPid(7,0).then(res => {
                if (res.data.result == 0) {
                    this.postname = res.data.datas
                }
            })
        },
        // 上岗证书专业类别
        getcertificate () {
            listByTypeAndPid(0,0).then(res => {
                if (res.data.result == 0) {
                    // console.log(res.data.datas)
                }
            })
        },
        choose (val) {
            this.fdata.post = val.name
        },
        choosetype (val) {
            this.jobCategoryname = val.name
            this.fdata.jobCategoryId = val.id
        },
        sitechange (val) {
            this.fdata.province = val.province.code
            this.fdata.city = val.city.code
         },
        projectchange (val) {
            this.fdata.projectProvince = val.province.code
            this.fdata.projectCity = val.city.code
            // ??????
            this.fdata.projectCountry = ''
            // console.log(val)
        },
        timechange (flag, val) {
            if (flag == 0) {
                this.fdata.startTime = val
            } else {
                this.fdata.endTime = val
            }
        },
        getCompany () {
            findOneCompany().then(res => {
                if (res.data.result == 0) {
                    let data = res.data.datas
                    this.fdata.contactName = data.contactName
                    this.fdata.email = data.email
                    this.fdata.cellNumber = data.tel
                }
            })
        }
    }
}
</script>

<style>
.ew-item {
    position: relative;
    margin: 0 20px;
    padding: 20px 0;
}
.ew-item + .ew-item {
    border-top: 1px solid #6eebdd;
}
.ew-item .describe {
    position: relative;
    left: 50%;
    top: 0;
    width: 100%;
    font-size: 16px;
    transform: translate(-50%,0);
    resize: none;
    border: none;
    background-color: #eee;
}


</style>
