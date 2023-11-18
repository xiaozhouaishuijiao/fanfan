<!--  -->
<template>
    <div class='gxbq'>
        <div class="content">
            <van-nav-bar title="个性标签" left-text="" right-text="" left-arrow @click-left="onClickLeft"
                @click-right="onClickRight" />

            <div class="text" style="background-color: white;">
                <textarea name="" placeholder="请填写个性签名" id="" cols="30" rows="10" maxlength="32"></textarea>
            </div>
            <div class="button" style="margin: 2rem auto 0;background-color: orange;border-radius: 1rem;">完成</div>
        </div>
        <van-popup v-model="show" position="top" :style="{ height: '30%' }" />
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
            show: false,
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        onClickLeft() {
            this.$router.push('/editor');
        },
        onClickRight() {
            console.log(666);
        }
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
<style lang="less" scoped>
.gxbq {
    .content {
        width: 100vw;
        height: 100vh;
        background-color: #e6e6e6;
    }

    .van-nav-bar {
        &::before {
            font-weight: bold;
        }
    }

    .text {
        width: 100%;
        height: 6rem;
        margin-top: 1rem;

        textarea {
            width: 100%;
            height: 100%;
            border: none;
            outline: none;
            text-indent: 0.5rem;
            color: black;
        }
    }

    .button {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        width: 70%;
        height: 2.5rem;

        &::before {
            color: #ccc;
        }
    }

    .button {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        width: 70%;
        height: 2.5rem;
    }
}
</style>