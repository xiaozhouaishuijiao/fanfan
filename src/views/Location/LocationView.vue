<!--  -->
<template>
    <div class='citypage'>
        <!-- 搜索栏开始 -->
        <section class="search" style="text-indent: 1rem;">
            <van-icon name="cross" class="vaniy" @click="close" />
            <div class="right">
                <van-icon name="search" />
                <input type="text" placeholder="出发城市">
            </div>
        </section>
        <!-- 搜索栏结 -->

        <!-- 城市内容开始 -->
        <section class="city">
            <div class="now">
                <div class="title">
                    <div>当前定位城市</div>
                    <p><van-icon name="location-o" />{{ this.$store.state.city }}</p>
                </div>
                <figure>
                    <img src="" alt="">
                </figure>
            </div>
            <div class="history">
                <div class="title">
                    历史选择城市
                </div>
                <ul>
                    <li v-for="historycit in historycity" :key="historycit.id">
                        {{ historycit.id }}</li>
                </ul>
            </div>
            <div class="hot">
                <div class="title">
                    热门出发城市
                </div>
                <ul>
                    <li v-for="hotc in hotcity" :key="hotc.id">
                        <p style="color: black;">{{ hotc.cityName }}</p>
                    </li>
                </ul>
            </div>
        </section>
        <!-- 城市内容结束 -->

        <!-- 城市列表开始 -->
        <van-index-bar>
            <div v-for="(site, key) in sites" :key="site.id">
                <van-index-anchor :index="key" style="text-align: left;" />
                <van-cell style="text-align: left;" :title="item.name" @click="changecity(item.name)" v-for="item in site"
                    :key="item.id" />
            </div>
        </van-index-bar>
        <!-- 城市列表结束 -->
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import "../../style/Location.less"
import { DaxieSearch, HotSearch, HistorySearch } from "../../api/home"
export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        //这里存放数据
        return {
            cities: "",
            sites: "",//底部字母排序城市列表
            hotcity: "",//热门选择城市
            historycity: "",//历史选择城市
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {

        //查询大写排序城市列表
        async getTian() {
            let result = await DaxieSearch({
                city: this.currentCity
            });
            // console.log(result.data.data);
            this.sites = result.data.data;
            // console.log(this.city);
        },

        //查询热门出发城市
        async getRe() {
            let result = await HotSearch();
            // console.log(result.data.data);
            this.hotcity = result.data.data;
            // console.log(this.hotcity);
        },

        //查询历史选择城市
        async getHi() {
            let result = await HistorySearch({
                token: localStorage.getItem("token")
            });
            // console.log(result.data.data);
            this.historycity = result.data.data;
            // console.log(this.historycity);
        },

        // 关闭按钮返回首页
        close() {
            this.$router.go(-1);
        },

        changecity(name) {
            this.$store.state.city = name;
            this.$router.push("/");
            this.$store.commit("changeCity", name);
        }
    },
    beforeCreate() { }, //生命周期 - 创建之前
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {

    },
    beforeMount() { }, //生命周期 - 挂载之前
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        this.getTian();
        this.getRe();
        this.getHi();
    },
    beforeUpdate() { }, //生命周期 - 更新之前
    updated() { }, //生命周期 - 更新之后
    beforeDestroy() { }, //生命周期 - 销毁之前
    destroyed() { }, //生命周期 - 销毁完成
    activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style></style>