<template>
    <div class="newjob_wrap">
        <ul>
            <li class="nw_lists">
                <div class="nwl_header">
                    <img src='../img/deleteone@2x.png' width="36px" height="36px">
                    <div class="name">
                        <p>江苏交通监理公司</p>
                        <p>1天前</p>
                    </div>
                </div>
                <div class="nwl_content">
                    <p class="title">岗位描述</p>
                    <p class="intro">岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述</p>
                </div>

                <div class="nwl_mark">
                    <span class="fulltime">全职</span>
                    <span class="require">硕士以上</span>
                    <span class="place">江苏苏州</span>
                </div>
                <div class="nwl_star">
                    <span style="font-size:14px;">评价：</span>
                    <rater v-model="star" @click.native="getStar" :max="5"></rater>
                </div>
                <div class="nwl_text">
                    <span style="font-size:14px;">点评：</span>
                    <!-- <x-textarea  v-model="textValue" :max="200"></x-textarea> class="weui-textarea"-->
                    <textarea  cols='50' rows='6' v-model="rdata.description" placeholder="请输入个人简介"></textarea>
                    <span class="num">({{remnant}}/200字)</span>
                </div>
            </li>

        </ul>

    </div>
</template>

<script>
    import { Rater,XTextarea } from 'vux'

    export default {
        name: 'raters',
        components: {
            Rater,
            XTextarea
        },
        data(){
            return{
                star: 0,
                textValue: '',
                remnant: 0
            }
        },
        methods:{
            getStar(ev){
                // console.log(this.star)
                // console.log(ev);
            },
            descInput(){
                var txtVal = this.textValue.length;
                this.remnant = txtVal;
            }
        }
}
</script>

<style scoped>
.newjob_wrap {
    background-color: #fff;
    padding: 18px 4px;
    overflow: auto;
}
.nw_lists {
    padding: 10px 16px;
    box-shadow: 2px 2px 30px #f0eded;
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
    background: url(../img/briefcase@2x.png) 0 center no-repeat
}
.nwl_mark .require {
    background: url(../img/award@2x.png) 0 center no-repeat
}
.nwl_mark .place {
    background: url(../img/flag@2x.png) 0 center no-repeat
}
.nwl_star{
  padding: 10px 0;
}
.nwl_text {
    position: relative;
}
.nwl_text textarea {
    display: block;
    width: 100%;
    margin-top: 10px;
    background-color: #dddbdb;
    border: none;
    resize: none;
}
.nwl_text .num {
    position: absolute;
    bottom: 4px;
    right: 4px;
}
</style>


