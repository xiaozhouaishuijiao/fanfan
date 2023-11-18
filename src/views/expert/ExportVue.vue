<!--  -->
<template>
    <div class='expert'>
        <div class="expertmain">
            <!-- 头部标题开始 -->
            <header>
                <div>
                    <h2>发现</h2>
                    <p><van-icon name="arrow-down" /></p>
                </div>
            </header>
            <!-- 头部标题结束 -->

            <!-- 搜索内容开始 -->
            <section class="search">
                <div>
                    <van-icon name="search" />
                    <input type="text" placeholder="查询更多景点">
                </div>
            </section>
            <!-- 搜索内容结束 -->

            <!-- 导航栏开始 -->
            <nav>
                <van-tabs v-model="active" animated style="margin-bottom: .5rem;">
                    <van-tab :title="biao.title" v-for="biao in biaos" :key="biao.index" @click="biao.thing">
                        <div class="goodsleft">
                            <div class="goda" v-for="leftList in leftLists" :key="leftList.index">
                                <div class="goodsdatail" v-for="left in leftList.circleFriendsBanners" :key="left.index">
                                    <img :src="left.pic" alt="">
                                    <div class="titlesecond" v-for="recommendLabel in leftLists.recommendLabels"
                                        :key="recommendLabel.index">
                                        {{ recommendLabel.title }}
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="goodsright">
                            <div class="goda" v-for="(rightList, index) in rightLists" :key="index">
                                <div class="goodsdatail" v-for="child in rightList.circleFriendsBanners" :key="child.index">
                                    <img :src="child.pic" alt="">
                                    <p class="tag" v-if="child.tag">{{ child.tag }}</p>
                                    <h3 class="title">{{ child.content }}</h3>
                                    <figure class="msg">
                                        <div class="left">
                                            <img :src="child.touxiang" alt="">
                                            <p>{{ child.nicheng }}</p>
                                        </div>
                                        <div class="right">
                                            <van-icon name="like-o" />
                                            <span>{{ child.number }}</span>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </van-tab>
                </van-tabs>
            </nav>
            <!-- 导航栏结束 -->

            <!-- 发布按钮开始 -->
            <section class="fabu" @click="fabuFn">
                <van-icon name="add-o" />
                <p>发布</p>
            </section>
            <!-- 发布按钮结束 -->
        </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { DaTuipi, DanewApi, DaselectApi, DaSummerApi } from "../../api/expert"

import "../../style/export.less"
export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        //这里存放数据
        return {
            leftLists: [],
            rightLists: [],
            title: "",
            index: "",
            active: 0,
            biaotis: [
            ],
            //标题栏
            biaos: [
                {
                    meth: "1",
                    page: 1,
                    title: "推荐",
                    thing: this.gettuisj
                },
                {
                    meth: '2',
                    page: 2,
                    title: "精选",
                    thing: this.getselectsj
                },
                {
                    page: 3,
                    title: "最新",
                    thing: this.getnewsj
                }, {
                    page: 4,
                    title: "夏日海岛推荐",
                    thing: this.getsummersj
                },
            ]
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        //tap切换点击事件

        //发布按钮点击事件
        fabuFn() {
            this.$router.push("/fabu");
        },

        // 筛选左右列表数据
        listsFn(biaotis) {
            // console.log(lists);
            if (biaotis.length > 0) {
                this.leftLists = biaotis.filter((item, index) => {
                    return index % 2 == 0;
                });
                this.rightLists = biaotis.filter((item, index) => {
                    return index % 2 !== 0;
                });
            }
        },

        //获取推荐列表数据
        async gettuiList() {
            let result = await DaTuipi({
                page: 1,
                size: 10
            });
            console.log(result.data.data);
            // this.biaotis = [];
            // this.leftLists = [];
            // this.rightLists = [];
            this.biaotis = result.data.data;
            this.listsFn(this.biaotis);
            console.log(this.leftLists);
            console.log(this.rightLists);
        },

        //获取精选列表数据
        async getselectList() {
            let result = await DaselectApi({
                page: 1,
                size: 10
            });
            console.log(result.data.data);
            // this.biaotis = [];
            // this.leftLists = [];
            // this.rightLists = [];
            this.biaotis = result.data.data;
            this.listsFn(this.biaotis);
        },

        //获取最新列表数据
        async getnewList() {
            let result = await DanewApi({
                page: 1,
                size: 10
            });
            console.log(result.data.data);
            // this.biaotis = [];
            // this.leftLists = [];
            // this.rightLists = [];
            this.biaotis = result.data.data;
            this.listsFn(this.biaotis);
        },

        //获取夏日海岛推荐数据
        async getsummerList() {
            let result = await DaSummerApi({
                page: 1,
                size: 10
            });
            console.log(result.data.data);
            // this.biaotis = [];
            // this.leftLists = [];
            // this.rightLists = [];
            this.biaotis = result.data.data;
            this.listsFn(this.biaotis);
            console.log(this.leftLists);
            console.log(this.rightLists);
        },

        //获取推荐数据点击事件
        gettuisj() {
            this.gettuiList();
        },

        //获取精选数据点击事件
        getselectsj() {
            this.getselectList();
        },

        //获取最新列表数据点击事件
        getnewsj() {
            this.getnewList();
        },

        //获取夏日海岛数据点击事件
        getsummersj() {
            this.getsummerList();
        }
    },
    beforeCreate() { }, //生命周期 - 创建之前
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {

    },
    beforeMount() { }, //生命周期 - 挂载之前
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        this.gettuiList();
        console.log(this.biaotis);
    },
    beforeUpdate() { }, //生命周期 - 更新之前
    updated() { }, //生命周期 - 更新之后
    beforeDestroy() { }, //生命周期 - 销毁之前
    destroyed() { }, //生命周期 - 销毁完成
    activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style></style>