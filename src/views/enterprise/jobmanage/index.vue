<template>
    <div>

        <router-view></router-view>
        <!-- <div class="hr"></div> -->
        <!-- <div class='footer-nav'>
            <router-link to='/jobmanage/jhistory' class="footer-item">
                <div class="tab-content">
                    <i class="nav-icon hpClass"></i>
                    <p class="tab-tittle">发布历史</p>
                </div>
            </router-link>
            <router-link to='/jobmanage/records' class="footer-item">
                <div class="tab-content">
                    <i class="nav-icon drClass"></i>
                    <p class="tab-tittle">删除记录</p>
                </div>
            </router-link>
            <router-link to='/jobmanage/alljob' class="footer-item">
                <div class="tab-content">
                    <i class="nav-icon fbClass"></i>
                    <p class="tab-tittle">发布新职位</p>
                </div>
            </router-link>
        </div> -->
    </div>
</template>
<script>


    export default {
        name: 'recruitIndex',
        components:{

        },
        created(){
        },
        data(){
            return{
            }
        },
        methods: {

        },
    }
</script>
<style lang="less">
.footer-nav{
    position: fixed;
    z-index: 2;
    bottom: 0;
    height: 64px;
    align-items: center;
    width: 100%;
    display: flex;
    background: #fff;
    box-shadow: -2px -2px 4px #e4dcdc;
}
.footer-item{
    display: block;
    flex: 1 1 auto;
}
.footer-item.active {
    color: #6febdb;
}
.footer-item.active .hpClass {
    background:url(../img/historya@2x.png);
    /* background-size: 44px 40px; */
    background-repeat:no-repeat;
}
.footer-item.active .drClass {
    background:url(../img/Rectangle19seach@2x.png);
    /* background-size: 44px 40px; */
    background-repeat:no-repeat;
}
.footer-item.active .fbClass {
    background:url(../img/newa@2x.png);
    /* background-size: 44px 40px; */
    background-repeat:no-repeat;
}
.tab-content{
    text-align: center;
}
.nav-icon{
    width: 25px;
    height: 20px;
    display: block;
    margin: auto;
}
.hpClass {
    background:url(../img/history@2x.png);
    /* background-size: 44px 40px; */
    background-repeat:no-repeat;
}
.drClass{
    background:url(../img/Rectangle19@2x.png);
    /* background-size: 44px 40px; */
    background-repeat:no-repeat;
}
.fbClass{
    background:url(../img/new@2x.png);
    /* background-size: 44px 40px; */
    background-repeat:no-repeat;
}
.tab-tittle{
    font-size: 20px;
    text-align: center;
    padding: 20px;
}
.hr {
    position: fixed;
    z-index: 2;
    bottom: 55px;
    width: 100%;
    height: 6px;
    background: #ddd;
}
</style>
