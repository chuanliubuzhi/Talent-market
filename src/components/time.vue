<template>
    <group class="time_wrap">
        <datetime format="YYYY-MM" title="项目开工时间	" placeholder="起始时间" :value.sync="startime"  @on-change='startchange'></datetime>
        <datetime format="YYYY-MM" title="项目竣工时间	" placeholder="结束时间" :value.sync="endtime" default-selected-value @on-change='endchange'></datetime>
    </group>

</template>

<script>
import { Datetime, Group  } from 'vux'
import { endianness } from 'os';

export default {
    components: {
        Datetime,
        Group 
    },
    data () {
        return {
            startime: '',
            endtime: ''            
        }

    },
    methods: {
        startchange (val) {
            this.startime = val
            // 0 表示开始时间
            this.$emit('timechange', 0, val)
        },
        endchange (val) {
            this.endtime = val
            // 1 表示结束时间
            this.$emit('timechange', 1, val)
        }
    }
}
</script>

<style>
/* 去除自带样式 */
/* .time_wrap .vux-datetime .weui-cell .weui-cell_access {
    width: 50px !important;
}
.time_wrap .weui-cells,.time_wrap .weui-cell {
    text-align: center;
    position: static !important;
}
.time_wrap .weui-cell {
    display: inline-block !important;
    width: 115px !important;
    height: 20px;
    padding: 0 !important;
}
.time_wrap .weui-cell__ft .vux-cell-primary .vux-datetime-value {
    width: 0 !important;
}
.time_wrap .weui-cell__ft {
    text-align: left !important;
    padding-left: 10px;
    padding-right: 13px;
    border: none;
    position: static;
    font-size: 16px;
}
.time_wrap .vux-cell-placeholder {
    font-size: 18px;
}
.time_wrap .vux-cell-value {
    font-size: 18px;
}
.time_wrap .scroller-item {
    font-size: 18px !important;
}
.time_wrap .vux-popup-header-left, .vux-popup-header-right {
    font-size: 20px;
}
.time_wrap .dp-header .dp-item {
    font-size: 20px;
} */
</style>
