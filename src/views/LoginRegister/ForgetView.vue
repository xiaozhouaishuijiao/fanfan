<!--  -->
<template>
    <div class='forget'>
        <div class="forgetmain">
            <!-- 顶部状态栏开始 -->
            <header>
                <div class="left">
                    <van-icon name="arrow-left" @click="back" />
                </div>
                <div class="middle">
                    <h3>设置密码</h3>
                </div>
            </header>

            <!-- 表单内容开始 -->
            <section class="form">
                <div><input type="text" placeholder="请输入手机号" v-model="phone"></div>
                <div><input type="text" placeholder="验证码" v-model="code">
                    <p @click="getCode">获取验证码</p>
                </div>
                <div><input type="password" placeholder="8-14位字母,数字或符号组合" v-model="password"></div>
                <div><input type="password" placeholder="确认密码" v-model="qrpwd"></div>
            </section>
            <!-- 表单内容结束 -->

            <section class="finish" @click="finish">
                完成
            </section>
        </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { LoginApis } from "../../api/login";
import "../../style/forget.less"
export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        //这里存放数据
        return {
            phone: "",
            code: "",
            password: "",
            qrpwd: "",
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        back() {
            this.$router.go(-1);
        },
        finish() {
            if (this.phone == "") {
                alert("请输入手机号");
                return;
            }
            if (this.code == "") {
                alert("请输入验证码");
                return;
            }
            if (this.password == "") {
                alert("请输入密码");
                return;
            }
            if (this.qrpwd == "") {
                alert("请确认密码");
                return;
            }
            if (this.password != this.qrpwd) {
                alert("两次密码不一致");
                return;
            } else {
                this.$router.push("/login");
            }
        },
        async getCode() {
            let result = await LoginApis({
                phone: this.phone,
            });
            console.log(result);
            // console.log(result.data.data);           
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
<style></style>