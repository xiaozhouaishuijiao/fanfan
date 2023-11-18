<!--  -->
<template>
    <div class='map'>
        <input type="text" v-model="keywords">

        <!--- 引入百度地图组件--->
        <baidu-map style="height: 400px;" :center="center" :zoom="17">
        <!--- 引入百度地图搜索组件,:pageCapacity为一页显示的城市最大数量,:keyword关键字为输入框内的文本
                     :selectFirstResult为是否默认选中搜索结果的第一个,:auto-viewport为是否显示当前城市的视野
                                                        location当前城市 -->
            <bm-local-search :pageCapacity="5" :keyword="keywords" :auto-viewport="true" :panel="false"
                :selectFirstResult="true" location="郑州"></bm-local-search>
        </baidu-map>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        //这里存放数据
        return {
            username: '',
            password: '',
            center: {
                lat: 34.809913,//lat和lng是经纬度
                lng: 113.534579//lat和lng是经纬度
            },
            zoom: 17,
            keywords: ""
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {

    },
    beforeCreate() { }, //生命周期 - 创建之前
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {

    },
    beforeMount() { }, //生命周期 - 挂载之前
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        console.log(this.$route.query.city);
        this.keywords = this.$route.query.city//将路由传过来的城市名赋值给搜索框
    },
    beforeUpdate() { }, //生命周期 - 更新之前
    updated() { }, //生命周期 - 更新之后
    beforeDestroy() { }, //生命周期 - 销毁之前
    destroyed() { }, //生命周期 - 销毁完成
    activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style></style>