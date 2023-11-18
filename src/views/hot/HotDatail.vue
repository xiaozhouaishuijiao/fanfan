<!--  -->
<template>
    <div class='hotda'>
        <h2>热门景点详情页面</h2>

        <!-- 轮播图开始 -->
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item>1</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
        </van-swipe>
        <!-- 轮播图结束 -->

        <!-- 顶部简介开始 -->
        <section class="construct">
            <div class="top">
                <div class="left">￥</div>
                <div class="right">￥</div>
            </div>
            <div class="middle">
                <h2>
                    <span></span>
                </h2>
            </div>
            <div class="tag">
                <p></p>
            </div>
            <div class="bottom">
                <div class="boleft">
                    <van-icon name="location-o" />
                    <p></p>
                    <p></p>
                </div>
                <div class="boright">
                    <p></p>
                </div>
            </div>
        </section>
        <!-- 顶部简介结束 -->

        <!-- 行程概览开始 -->
        <section class="xing">
            <h4></h4>
            <ul>
                <li>
                    <p></p>
                    <div></div>
                </li>
            </ul>
        </section>
        <!-- 行程概览结束 -->

        <!-- 底部详情开始 -->
        <div class="section footerdatail">
            <div class="liangdian">
                <div></div>
            </div>

            <div class="showimg">
                <div></div>
            </div>

            <div class="xingcheng">

            </div>

            <div class="jihua">

            </div>

            <div class="middlemtap">

            </div>


        </div>
        <!-- 底部详情结束 -->



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

    },
    beforeUpdate() { }, //生命周期 - 更新之前
    updated() { }, //生命周期 - 更新之后
    beforeDestroy() { }, //生命周期 - 销毁之前
    destroyed() { }, //生命周期 - 销毁完成
    activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style></style>