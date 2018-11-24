<template>
    <div style="margin-left: 10px;">
        <img :src='imgsrc' @click="getready" width="75" height="75">
    </div>
</template>

<script>
import {updateucenter,myinfo,getConfig,uploadimg,weixinuploadimg} from '@/api/ucenter.js'
export default {
    created () {
        // 配置
        let href = window.location.href.split("#")
        let url = href[0]
        let data = {
            url: url
        };
        getConfig(data).then(res => {
            // 调用微信接口的配置
            // console.log(res.data);
            wx.config({
			debug: false,
			appId: res.data.appId,
			timestamp: res.data.timestamp,
			signature: res.data.signature,
			nonceStr: res.data.nonceStr,
			jsApiList: [
				'checkJsApi',
				'getLocation',
				'chooseImage',
                'uploadImage',
                'downloadImage'
			] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });
        });

        
    },
    data () {
        return {
            mediaId: '',
            imgsrc: ''
        }
    },
    methods: {
        getready () {
            let _this = this
            wx.ready(function(){
                _this.getImg()
            });
            // 配置失败执行的函数
            wx.error(function(res){
                // console.log(res)
            });
        },
        //选择照片
        getImg(){
            let _this = this
            wx.chooseImage({
                count: 1, // 默认9
                sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                success: function (res) {
                    var localIds = res.localIds[0].toString() // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                    _this.uploadImg(localIds)
                }
            });

        },
        // 上传图片
        uploadImg(val) {
            let _this = this 
            wx.uploadImage({  
                localId: val, // 需要上传的图片的本地ID，由chooseImage接口获得  
                isShowProgressTips: 1, // 默认为1，显示进度提示  
                success: function (res) {  
                    _this.mediaId = res.serverId; // 返回图片的服务器端ID  
                    // _this.imgsrc = localIds
 
                    // 上传图片
                    let fdata = {
                        SERVER_ID:  _this.mediaId 
                    }
                    weixinuploadimg(fdata).then(res => {
                        if (res.data.result == 0) {
                            _this.imgsrc = res.data.datas.headimgurl
                            // url传父组件
                            _this.$emit('outimg', _this.imgsrc)
                        }
                    })
                   

                },  
                fail: function (error) {  
                    picPath = '';  
                    localIds = '';  
                    alert(Json.stringify(error));  
  
                }  
  
            });   
        },
    }
}
</script>

<style>

</style>
