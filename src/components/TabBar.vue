<!--  -->
<template>
    <div class='TabBar'>
        <div class="dita">
            <router-link :to="icon.road" style="width: 33%;" v-for="(icon, index) in icons" :key="icon.index">
                <div class="dao">
                    <img @click="changetb" :src="suo == index ? icon.active : icon.inactive" alt="">
                    <p>{{ icon.title }}</p>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import "@/style/TabBar.less"
export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        //这里存放数据
        return {
            suo: 0,
            // icon: {
            //     active: 'https://img01.yzcdn.cn/vant/user-active.png',
            //     inactive: 'https://img01.yzcdn.cn/vant/user-inactive.png',
            // },
            // icon: {
            //     active: require("../assets/TabBar/首页-不选中.png"),
            //     inactive: require("../assets/TabBar/首页-选中.png"),
            // },
            // icon2: {
            //     active: require("../assets/TabBar/traveltab2.png"),
            //     inactive: require("../assets/TabBar/traveltab.png"),
            // },
            // icon3: {
            //     active: require("../assets/TabBar/我的_选中.png"),
            //     inactive: require("../assets/TabBar/我的_不选中.png"),
            // },

            icons: [
                {
                    id: 1,
                    title: "首页",
                    active: require("../assets/TabBar/首页-不选中.png"),
                    inactive: require("../assets/TabBar/首页-选中.png"),
                    road: "/home",

                },
                {
                    id: 2,
                    title: "达人圈",
                    active: require("../assets/TabBar/traveltab2.png"),
                    inactive: require("../assets/TabBar/traveltab.png"),
                    road: "/expert"
                },
                {
                    id: 3,
                    title: "我的",
                    active: require("../assets/TabBar/我的_选中.png"),
                    inactive: require("../assets/TabBar/我的_不选中.png"),
                    road: "/mine"
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
        changetb(index) {
            this.suo = index;
            console.log(index);
        },
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
<style scoped lang="less">
.TabBar {
    background-color: #fff;
    .wh(100%, 3.5rem);
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: 1px solid #ccc;
    padding-top: .5rem;

    .wh(@width, @height) {
        width: @width;
        height: @height;
    }

    .dita {
        .wh(100%, 100%);
        display: flex;
        justify-content: space-between;

        a {
            .dao {
                width: 100%;
                height: 100%;

                img {
                    .wh(50%, 50%);
                }

                p {
                    .wh(100%, 50%);
                    color: orange;
                }
            }
        }
    }
}
</style>