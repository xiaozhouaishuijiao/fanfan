<!--  -->
<template>
    <div class='Hot'>
        <!-- 头部定位开始 -->
        <header>
            <div class="headerleft">
                <van-icon name="arrow-left" @click="backFn" />
                <p>热门景点</p>
            </div>
            <div class="headerright">
                <baidu-map @ready="getCurrentCity">
                    <!-- v-if控制获取当前位置和位置元素的显示隐藏 -->
                    <button @click="getCurrentCity"
                        style="border: none; outline: none; background-color: transparent;">获取当前城市</button>
                    <p @click="cityFn">当前城市:{{ currentCity }}</p>
                </baidu-map>
            </div>
        </header>
        <!-- 头部定位结束 -->

        <!-- 搜索框开始 -->
        <section class="search">
            <van-icon name="search" />
            <input type="text" placeholder="您想去哪里">
        </section>
        <!-- 搜索框结束 -->

        <!-- 推荐景点开始 -->
        <section class="jingd">
            <ul>
                <li v-for="jingdian in jingdians.slice(0, 6)" :key="jingdian.index">
                    <span>{{ jingdian.searchContent }}</span>
                </li>
            </ul>
        </section>
        <!-- 推荐景点结束 -->

        <!-- 热门景点推荐开始 -->
        <section class="tuijian">
            <h2>热门推荐</h2>
            <div class="content">
                <div class="datail" v-for="(jing, index) in jings" :key="index">
                    <img :src="jing.pic" alt="">
                    <h4>{{ jing.title }}</h4>
                    <p>
                        <span>{{ jing.journey?.journeyType }}</span><span>{{ jing.journey?.journeyTypeContent
                        }}</span><span>{{
    jing.journey?.numberDays }}</span>
                    </p>
                    <figure>
                        <div class="price">
                            <span class="pri">￥{{ jing.manPrice }}</span>
                            <span class="dan">起</span>
                        </div>
                        <div class="number">{{ jing.applyCount }}人已报名</div>
                    </figure>
                </div>
            </div>
        </section>
        <!-- 热门景点结束 -->
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { TuiApi, HotJing } from '../../api/home'
import "../../style/HotView.less"
export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        //这里存放数据
        return {
            currentCity: '',//定义一个空城市名
            jingdians: [//推荐景点数组
            ],
            jings: [
            ]
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        //获取城市定位
        getCurrentCity({ BMap }) {
            //重新获取位置时清空城市名
            // this.currentCity = ""
            const geolocation = new BMap.Geolocation();
            geolocation.getCurrentPosition((result) => {
                if (geolocation.getStatus() === 0) {
                    const city = result.address.city;
                    this.currentCity = city;
                } else {
                    this.currentCity = "定位失败"
                }
            })
        },
        //跳转到城市选择页面
        cityFn() {
            this.$router.push("/cheng")
        },

        //获取热门景点
        async getTui() {
            let result = await TuiApi();
            // console.log(result.data.data);
            this.jingdians = result.data.data;
        },

        //获取热门推荐
        async getJing() {
            let result = await HotJing();
            console.log(result.data.data);
            this.jings = result.data.data;
        },
        backFn() {
            this.$router.go(-1);
        }
    },
    beforeCreate() { }, //生命周期 - 创建之前
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {

    },
    beforeMount() { }, //生命周期 - 挂载之前
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        this.getTui();
        this.getJing();
    },
    beforeUpdate() { }, //生命周期 - 更新之前
    updated() { }, //生命周期 - 更新之后
    beforeDestroy() { }, //生命周期 - 销毁之前
    destroyed() { }, //生命周期 - 销毁完成
    activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style></style>