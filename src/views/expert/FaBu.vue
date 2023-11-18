<!--  -->
<template>
    <div class='fabu'>
        <!-- 头部开始 -->
        <header>
            <div class="leftarrow">
                <van-icon name="arrow-left" @click="goBack" />
            </div>
            <div class="fabubutton">
                <p>发布</p>
            </div>
        </header>
        <!-- 头部结束 -->

        <!-- 发布内容及文件上传内容开始 -->
        <section class="content">
            <div class="text">
                <textarea name="" id="" cols="30" rows="10" placeholder="记录今天的美好生活"></textarea>
            </div>
            <div class="file">
                <van-uploader v-model="fileList" multiple :after-read="afterRead" :before-read="beforeRead"
                    :max-count="2" />
            </div>
        </section>
        <!-- 发布内容及文件上传内容结束 -->

        <!-- 选择位置内容开始 -->
        <section class="location">
            <div class="left">
                <baidu-map class="map" @ready="getCurrentCity">
                    <!-- 添加点击事件携带当前城市名字进入地图页面 -->
                    <router-link to="/selectmap?city=新芒果"><van-icon name="location-o" />新芒果</router-link>
                </baidu-map>
            </div>
            <div class="right">
                <router-link to="/selectmap?city=新芒果">
                    <van-icon name="arrow" />
                </router-link>
            </div>
        </section>
        <!-- 选择内容位置结束 -->

        <!-- 标签内容开始 -->
        <section class="tag">
            <div class="title">
                <h4>推荐标签</h4>
            </div>
        <!-- <div class="tagcon">
                <p v-for="tag in tags" :key="tag.index">
                    <span @click="slected(id)" :class="{ 'item': child.select }" v-for="(child, id) in tag.childrens"
                        :key="id">#{{ child.title
                        }}</span>
                </p>
                                                                                                                                                                                                                    </div> -->
            <div class="tagcon">
                <p @click="onSelect2(i)" class="item" v-for="(item, i) in itemList" :key="i"
                    :class="{ 'item1': item.select }">

                    <span>#{{ item.text }}</span>
                </p>
            </div>
        </section>
        <!-- 标签内容结束 -->
    </div>
</template>


<!-- <script type="text/javascript">
export let itemData = [{
    id: '1',
    text: '识别性',
    select: false
},
{
    id: '2',
    text: '独特性',
    select: false
},
{
    id: '3',
    text: '易记性',
    select: false
},
{
    id: '4',
    text: '识别',
    select: false
},
{
    id: '5',
    text: '学识',
    select: false
},
{
    id: '6',
    text: '持久性',
    select: false
},
{
    id: '7',
    text: '易传播',
    select: false
}
];
</script> -->
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import "../../style/FaBu.less"
import { Toast } from "vant";
export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        //这里存放数据
        return {
            chooseData: [],
            itemList: [{
                id: '1',
                text: '出门就得这么玩',
                select: false
            },
            {
                id: '2',
                text: '网红打卡地',
                select: false
            },
            {
                id: '3',
                text: '美食探店',
                select: false
            },
            {
                id: '4',
                text: '必吃地道小吃',
                select: false
            },
            {
                id: '5',
                text: '当地必打卡',
                select: false
            },
            {
                id: '6',
                text: '推荐一家酒店',
                select: false
            },
            {
                id: '7',
                text: '周边好去处',
                select: false
            },
            {
                id: '8',
                text: '一次不能错过的体验',
                select: false
            },
            {
                id: '9',
                text: '发现一处小众秘境',
                select: false
            },
            ],
            // 文件发布记录的数组
            fileList: [],
            tags: [
                {
                    childrens: [
                        {
                            id: 1,
                            title: "出门就得这么玩"
                        }, {
                            id: 2,
                            title: "网红打卡地"
                        }, {
                            id: 3,
                            title: "美食探店"
                        }
                    ]
                },
                {
                    childrens: [
                        {
                            id: 1,
                            title: "必吃的地道小吃"
                        }, {
                            id: 2,
                            title: "当地必打卡"
                        }
                    ]
                },
                {
                    childrens: [
                        {
                            id: 1,
                            title: "推荐一家酒店"
                        }, {
                            id: 2,
                            title: "周边好去处"
                        }
                    ]
                },
                {
                    childrens: [
                        {
                            id: 1,
                            title: "一次不能错过的体验"
                        }, {
                            id: 2,
                            title: "发现一处小众秘境"
                        }
                    ]
                },
                {
                    childrens: [
                        {
                            id: 1,
                            title: "一次不能错过的体验"
                        }, {
                            id: 2,
                            title: "发现一处小众秘境"
                        }
                    ]
                },
                {
                    childrens: [
                        {
                            id: 1,
                            title: "一次不能错过的体验"
                        }, {
                            id: 2,
                            title: "发现一处小众秘境"
                        }
                    ]
                },
                {
                    childrens: [
                        {
                            id: 1,
                            title: "一次不能错过的体验"
                        }, {
                            id: 2,
                            title: "发现一处小众秘境"
                        }
                    ]
                },

            ],
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        //返回按钮回退单击事件
        goBack() {
            this.$router.go(-1);
        },
        //选中标签变色的单击事件

        onSelect2(i) {
            let text = this.itemList[i].text;
            if (!this.itemList[i].select && this.chooseData.length > 2) {
                alert('最多只能选择三个');
                return;
            }
            this.itemList[i].select = !this.itemList[i].select;

            //选中且数量小于三就添加
            if (this.itemList[i].select && this.chooseData.length < 3) {
                this.chooseData.push(i);
            }
            //取消选中
            if (!this.itemList[i].select) {
                this.chooseData.splice(this.chooseData.indexOf(text), 1)
            }
            console.log(this.chooseData);
        },


        //定位方法
        getCurrentCity({ BMap }) {
            let geolocation = new BMap.Geolocation();
            console.log(geolocation);
            geolocation.getCurrentPosition(result => {
                console.log(result.address.city);
                this.city = result.address.city//将获取到的信息中的city即为城市名字赋值给city属性用以在页面中显示当前所处城市
            })
        },

        //读取文件后的事件
        afterRead(file) {
            this.upImg(file.file)
        },

        //请求事件,请求接口上传文件
        upImg(file) {
            console.log("请求接口");
            console.log(file);
            let formdata = new window.FormData()
            formdata.append("file", file)
            console.log(formdata);
            // let result = xxxxApi(formdata)
            // console.log(result);

        },

        //上传文件前的事件
        beforeRead(file) {
            // 判断上传文件,此处为判断上传文件图片的格式是否为想要的图片格式
            if (file.type !== 'image/jpeg') {
                //如果不是if内规定的图片格式,弹出提示框,提示上传文件的格式
                Toast('请上传 jpg格式图片');
                return false;
            }
            return true;
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