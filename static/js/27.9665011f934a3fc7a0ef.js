webpackJsonp([27],{Pi8r:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("ZqI4"),o=a("dVGF"),i=a("9FUf"),n=a("pNyj"),c=a("Ju7D"),r=a("z0xl"),p=(s.a,o.a,i.default,n.default,{components:{VTime:s.a,VSite:o.a,stationame:i.default,stationtype:n.default},created:function(){this.getposttype(),this.getpostname(),this.getcertificate(),this.getCompany()},data:function(){return{sexoptions:[{key:"1",value:"男"},{key:"2",value:"女"}],posttype:[],postname:[],showstationame:!1,showstationtype:!1,jobCategoryname:"",fdata:{jobCategoryId:"",post:"",certMajorL1Id:Number,certMajorL2Id:Number,description:"",workingType:0,sex:0,province:"",city:"",contactName:"",email:"",cellNumber:"",projectProvince:"",projectCity:"",projectCountry:"",projectName:"",projectDesc:"",startTime:"",endTime:""}}},methods:{post:function(){},getposttype:function(){var t=this;Object(c.a)(1,0).then(function(e){0==e.data.result&&(t.posttype=e.data.datas)})},getpostname:function(){var t=this;Object(c.a)(7,0).then(function(e){0==e.data.result&&(t.postname=e.data.datas)})},getcertificate:function(){Object(c.a)(0,0).then(function(t){t.data.result})},choose:function(t){this.fdata.post=t.name},choosetype:function(t){this.jobCategoryname=t.name,this.fdata.jobCategoryId=t.id},sitechange:function(t){this.fdata.province=t.province.code,this.fdata.city=t.city.code},projectchange:function(t){this.fdata.projectProvince=t.province.code,this.fdata.projectCity=t.city.code,this.fdata.projectCountry=""},timechange:function(t,e){0==t?this.fdata.startTime=e:this.fdata.endTime=e},getCompany:function(){var t=this;Object(r.h)().then(function(e){if(0==e.data.result){var a=e.data.datas;t.fdata.contactName=a.contactName,t.fdata.email=a.email,t.fdata.cellNumber=a.tel}})}}}),d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"enterpriseInfo_wrap"},[a("div",{staticClass:"ew-item"},[a("h2",[t._v("岗位类别")]),t._v(" "),a("div",{staticClass:"ewn_right",on:{click:function(e){t.$refs.stationtype.byShow=!0}}},[a("span",[t._v(t._s(t.jobCategoryname))]),t._v(" "),a("router-link",{staticClass:"jump",attrs:{to:""}})],1)]),t._v(" "),a("div",{staticClass:"ew-item"},[a("h2",[t._v("岗位名称")]),t._v(" "),a("div",{staticClass:"ewn_right",on:{click:function(e){t.$refs.stationame.byShow=!0}}},[a("span",[t._v(t._s(t.fdata.post))]),t._v(" "),a("router-link",{staticClass:"jump",attrs:{to:""}})],1),t._v(" "),a("p",{staticClass:"subtitle"},[t._v("性别")]),t._v(" "),a("group",[a("radio",{attrs:{options:t.sexoptions,max:1,"selected-label-style":{color:"#4ee1d1"}},model:{value:t.fdata.sex,callback:function(e){t.$set(t.fdata,"sex",e)},expression:"fdata.sex"}})],1)],1),t._v(" "),a("div",{staticClass:"ew-item"},[a("h2",[t._v("工作地点")]),t._v(" "),a("div",{staticStyle:{"margin-top":"20px"}},[a("v-site",{attrs:{a:!1},on:{sitechange:t.sitechange}})],1),t._v(" "),a("p",{staticClass:"subtitle"},[t._v("工作性质")]),t._v(" "),a("div",{staticClass:"radio_group",staticStyle:{"padding-left":"20px"}},[a("span",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.fdata.workingType,expression:"fdata.workingType"}],attrs:{type:"radio",value:"1"},domProps:{checked:t._q(t.fdata.workingType,"1")},on:{change:function(e){t.$set(t.fdata,"workingType","1")}}}),t._v("全职")]),t._v(" "),a("span",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.fdata.workingType,expression:"fdata.workingType"}],attrs:{type:"radio",value:"2"},domProps:{checked:t._q(t.fdata.workingType,"2")},on:{change:function(e){t.$set(t.fdata,"workingType","2")}}}),t._v("兼职")]),t._v(" "),a("span",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.fdata.workingType,expression:"fdata.workingType"}],attrs:{type:"radio",value:"0"},domProps:{checked:t._q(t.fdata.workingType,"0")},on:{change:function(e){t.$set(t.fdata,"workingType","0")}}}),t._v("不限")])]),t._v(" "),a("p",{staticClass:"subtitle"},[t._v("岗位描述")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.fdata.description,expression:"fdata.description"}],staticClass:"describe",attrs:{rows:"6"},domProps:{value:t.fdata.description},on:{input:function(e){e.target.composing||t.$set(t.fdata,"description",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"ew-item"},[a("h2",[t._v("项目名称")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.fdata.projectName,expression:"fdata.projectName"}],staticClass:"project_name",attrs:{type:"text"},domProps:{value:t.fdata.projectName},on:{input:function(e){e.target.composing||t.$set(t.fdata,"projectName",e.target.value)}}}),t._v(" "),a("p",{staticClass:"subtitle",staticStyle:{"padding-bottom":"0"}},[t._v("时间")]),t._v(" "),a("v-time",{on:{timechange:t.timechange}}),t._v(" "),a("p",{staticClass:"subtitle"},[t._v("项目地点")]),t._v(" "),a("v-site",{on:{sitechange:t.projectchange}}),t._v(" "),a("p",{staticClass:"subtitle"},[t._v("项目描述")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.fdata.projectDesc,expression:"fdata.projectDesc"}],staticClass:"describe",attrs:{rows:"7"},domProps:{value:t.fdata.projectDesc},on:{input:function(e){e.target.composing||t.$set(t.fdata,"projectDesc",e.target.value)}}})],1),t._v(" "),a("div",{staticClass:"ew_footer"},[a("span",[t._v("保存")]),t._v(" "),a("span",{on:{click:t.post}},[t._v("提交")])]),t._v(" "),a("stationtype",{ref:"stationtype",attrs:{posttype:t.posttype},on:{choosetype:t.choosetype,updata:t.getposttype}}),t._v(" "),a("stationame",{ref:"stationame",attrs:{postname:t.postname},on:{choosename:t.choose,updata:t.getpostname}})],1)},staticRenderFns:[]};var v=a("C7Lr")(p,d,!1,function(t){a("Qsp1")},null,null);e.default=v.exports},Qsp1:function(t,e){}});
//# sourceMappingURL=27.9665011f934a3fc7a0ef.js.map