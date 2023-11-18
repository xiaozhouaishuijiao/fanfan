<!--  -->
<template>
    <div class='login'>
        <header>

        </header>

        <!-- logo图标开始 -->
        <section class="logo">
            <img src="../../assets/login/图层 3.png" alt="" style="width: 100%;height: 100%;">
        </section>
        <!-- logo图标结束 -->

        <!-- 表单内容开始 -->
        <van-tabs v-model="activeName">
            <van-tab title="账号密码登录" name="a">
                <div class="contenty">
                    <div class="top">
                        <input type="text" placeholder="请输入手机号" v-model="phone">
                    </div>
                    <div class="bottom">
                        <input type="password" placeholder="请输入密码" v-model="password">
                    </div>
                </div>
                <!-- 登录注册按钮开始 -->
                <section class="butt">
                    <div class="title" @click="forgetFn">
                        忘记密码
                    </div>
                    <div class="log" @click="nodeFny">
                        登录
                    </div>
                    <div class="nohave">
                        还没有账号?
                    </div>
                    <router-link to="/register">
                        <div class="reg">
                            注册
                        </div>
                    </router-link>
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
            </van-tab>


            <van-tab title="手机验证码登录" name="b">
                <div class="first"><input type="text" placeholder="请输入手机号" v-model="phone"></div>
                <div class="second"><input type="text" placeholder="验证码" v-model="code">
                    <p @click="getCodes" ref="hqyzm">获取验证码</p>
                </div>
                <!-- 登录注册按钮开始 -->
                <section class="butt">
                    <div class="title" @click="forgetFn">
                        忘记密码
                    </div>
                    <div class="log" @click="nodeFne">
                        登录
                    </div>
                    <div class="nohave">
                        还没有账号?
                    </div>
                    <router-link to="/register">
                        <div class="reg">
                            注册
                        </div>
                    </router-link>
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
            </van-tab>
        </van-tabs>
        <!-- 表单内容结束 -->

        <!-- 登录注册按钮开始 -->
    <!-- <section class="butt">
            <div class="title">
                忘记密码
            </div>
            <div class="log" @click="nodeFn">
                登录
            </div>
            <div class="nohave">
                还没有账号?
            </div>
            <router-link to="/register">
                <div class="reg">
                    注册
                </div>
            </router-link>
                                                                                                                                                                                                                                                                                                </section> -->
        <!-- 登录注册按钮结束 -->

        <!-- 其他登录方式开始 -->
    <!-- <section class="other">
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
                    <img src="@/assets/login" alt="">
                </div>
                <div>
                    <img src="@/assets/login" alt="">
                </div>
                <div>
                    <img src="@/assets/login" alt="">
                </div>
            </div>
                                                                                                                                                                                                                                                                                                    </section> -->
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { LoginApi, LoginApie, LoginApis } from '../../api/login.js'
import "../../style/media@.css"
import "../../style/Login.less"
export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        //这里存放数据
        return {
            username: '',
            password: '',
            activeName: 'a',
            phone: "",
            yzm: "",
            hqyzm: "",
            code: ""
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        nodeFny() {
            if (this.phone == "") {
                alert("请输入手机号");
                return
            } if (this.password == "") {
                alert("请输入密码");
                return
            }
            else {
                this.$router.push("/home");
                this.getCode();
            }
        },

        nodeFne() {
            if (this.phone == "") {
                alert("请输入手机号");
                return
            } if (this.code == "") {
                alert("请输入验证码");
                return
            }
            else {
                this.$router.push("/home");
                this.getCodee();
            }
        },

        // 手机密码登录
        async getCode() {
            let result = await LoginApi({
                phone: "17839671580",
                password: "123456",
            })
            console.log(result.data.data);
            localStorage.removeItem("token");
            localStorage.setItem("token", result.data.data)
        },

        //手机号+验证码登录
        async getCodee() {
            let result = await LoginApie({
                phone: "17839671580",
                code: this.code
            })
            console.log(result);
            localStorage.removeItem("token");
            localStorage.setItem("token", result.data.data)

        },

        // 获取验证码
        async getCodes() {
            let result = await LoginApis({
                phone: "17839671580",
            })
            console.log(result);

        },

        forgetFn() {
            this.$router.push("/forget");
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
<style scoped></style>