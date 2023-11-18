<!--  -->
<template>
    <div class='register'>

        <!-- 头部状态栏开始 -->
        <header></header>
        <!-- 头部状态栏结束 -->

        <!-- logo图标开始 -->
        <section class="logo">

        </section>
        <!-- logo图标结束 -->

        <!-- 输入框内容开始 -->
        <section class="input-box">
            <div class="ding"><input type="text" class="di" value="" placeholder="请输入手机号" v-model="phone">
                <figure class="admin">
                    请检查您的手机号是否正确
                </figure>
            </div>
            <div><input type="text" class="yanp" value="" placeholder="验证码" v-model="code">
                <figure class="yan">
                    请检查您的验证码是否正确
                </figure>
                <p class="code" @click="getCode" ref="yzm">获取验证码</p>
            </div>
            <div><input type="password" class="pasp" value="" placeholder="请输入密码" v-model="password">
                <figure class="pass">
                    请检查您的密码是否正确
                </figure>
            </div>
        </section>
        <!-- 输入框内容结束 -->

        <!-- 登录注册按钮开始 -->
        <section class="butt">
            <div class="log" @click="noneFne">
                注册
            </div>
            <div class="nohave">
                还没有账号?
            </div>

            <div class="reg" @click="login">
                登录
            </div>

        </section>
        <!-- 登录注册按钮结束 -->

        <!-- 其他登录方式开始 -->
        <section class="other">
            <div class="or">
                <div class="left">

                </div>
                <div class="middle">
                    Or
                </div>
                <div class="right">

                </div>
            </div>
            <div class="third">
                <div>
                    <img src="../../assets/login/weixin.png" alt="">
                </div>
                <div>
                    <img src="../../assets/login/weibo.png" alt="">
                </div>
                <div>
                    <img src="../../assets/login/qq.png" alt="">
                </div>
            </div>
        </section>
    </div>
</template>

<script>

// let di = document.querySelector(".di");
// let yanp = document.querySelector(".yanp");
// let pasp = document.querySelector(".pasp");
// let admin = document.querySelector(".admin");
// let yan = document.querySelector(".yan");
// let pass = document.querySelector(".pass");
import { RegisterApi, RegisterApie } from "../../api/register.js";
import "../../style/register.less"
import "../../style/media@.css"
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        //这里存放数据
        return {
            phone: "",
            yzm: "",
            password: "",
            code: ""
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        login() {
            // if (di.value == "") {
            //     admin.style.display = "block"
            // }
            // if (yanp.value == "") {
            //     yan.style.display = "block"
            // }
            // if (pasp.value == "") {
            //     pass.style.display = "block"
            // } else {
            //     this.$router.push("/home");
            //     console.log(666);
            // }
            this.$router.push("/login");
        },
        noneFn() {
            if (this.phone == "") {
                alert("请输入手机号");
                return;
            } if (this.code == "") {
                alert("请输入验证码");
                return;
            } if (this.password == "") {
                alert("请输入密码");
                return;
            } else {
                this.register();
            }
            this.getCode();
        },


        noneFne() {
            if (this.phone == "") {
                alert("请输入手机号");
                return;
            } if (this.code == "") {
                alert("请输入验证码");
                return;
            } if (this.password == "") {
                alert("请输入密码");
                return;
            } else {
                this.register();
            }
            this.getCodee();
        },
        register() {
            this.$router.push("/login");
        },

        // 获取验证码
        async getCode() {
            let result = await RegisterApi({
                phone: this.phone,
            })
            console.log(result);
            console.log(this.code);
        },

        // 注册用户
        async getCodee() {
            let result = await RegisterApie({
                phone: this.phone,
                password: this.password,
                code: this.code
            })
            console.log(result);
            console.log(this.code);
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
<style lang="less"></style>