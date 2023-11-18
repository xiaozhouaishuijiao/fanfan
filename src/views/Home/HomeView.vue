<!--  -->
<template>
  <div class='Home'>
    <div class="homemain">
      <!-- 头部定位开始 -->
      <header>
        <div class="headerleft">
          首页
        </div>
        <div class="headerright">
          <baidu-map @ready="getCurrentCity">
            <button @click="getCurrentCity"
              style="border: none; outline: none; background-color: transparent;">获取当前城市</button>
            <p @click="cityFn">当前城市:{{ this.$store.state.city }} </p>
          </baidu-map>
          <!-- v-if控制获取当前位置和位置元素的显示隐藏 -->

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
          <li v-for="jingdian in jingdians" :key="jingdian.index">
            <span>{{ jingdian.searchContent }}</span>
          </li>
        </ul>
      </section>
      <!-- 推荐景点结束 -->

      <!-- 导航栏开始 -->
      <section class="nav">
        <figure>
          <router-link class="pai" to="">
            <div>
              <img :src="wea_img" alt="">
            </div>
            <p>{{ tem_night }}°C~{{ tem_day }}°C</p>
          </router-link>
          <router-link class="pai" to="hot">
            <div>
              <img src="../../assets/Home/circle_img3.png" alt="">
            </div>
            <p>热门景点</p>
          </router-link>
          <router-link class="pai" to="zhou">
            <div>
              <img src="../../assets/Home/周边.png" alt="">
            </div>
            <p>周边游</p>
          </router-link>
          <router-link class="pai" to="qin">
            <div>
              <img src="../../assets/Home/circle_img5.png" alt="">
            </div>
            <p>亲子游</p>
          </router-link>
        <!-- <router-link to="tian">

        </router-link>
        <router-link to="hot">

        </router-link>
        <router-link to="zhou">

        </router-link>
        <router-link to="qin">

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          </router-link> -->
        </figure>
      </section>
      <!-- 导航栏结束 -->

      <!-- 热门景点开始 -->
      <section class="hot">
        <div class="hottop">
          <h2>热门景点</h2>
          <p>查看更多>></p>
        </div>
        <div class="datail">
          <div class="area" v-for="(good, index) in goods" :key="index">
            <div class="datop">
              <img :src="good.pic" alt="">
            </div>
            <h2>{{ good.title }}</h2>
            <p class="test">{{ good.journey?.journeyType }}{{ good.journey?.journeyTypeContent }}{{
              good.journey?.numberDays }}</p>
          <!-- <p class="test" v-if="good.journey && good.journey.journeyType">
            {{ good.journey.journeyType }}
                                                                                                                                                                                                                                      </p> -->
            <figure>
              <div class=" fileft">
                <van-rate v-model="value" :size="25" color="#ffd21e" void-icon="star" void-color="#eee" />
              </div>
              <div class="firight">
                <span>￥{{ good.manPrice }}</span>
                <span>/人起</span>
              </div>
            </figure>
            <div class="tag">
              <span v-for="placeFeature in good.placeFeatures" :key="placeFeature.index">{{ placeFeature.feature }}</span>
            </div>
          </div>
        </div>
      </section>
      <!-- 热门景点结束 -->
    </div>
  </div>
</template>
<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=9fda916299b02a47ae05036e6d48366a"></script>
<script>

//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import "@/style/Home.less"
import { TuiApi, WeatherApi, HotJing } from '../../api/home'
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
  },
  data() {
    //这里存放数据
    return {
      tem_day: "",
      tem_night: "",
      currentCity: '',//定义一个空城市名
      value: 2.5,
      wea_img: "",
      hotjing: [
      ],
      biaoqians: [],
      jingdians: [
      ],
      // navs: [{
      //   id: 2,
      //   img: require("../../assets/Home/circle_img3.png"),
      //   title: "热门景点",
      //   road: "/hot"
      // },
      // {
      //   id: 3,
      //   img: require("../../assets/Home/周边.png"),
      //   title: "周边游",
      //   road: "/zhou"
      // }, {
      //   id: 4,
      //   img: require("../../assets/Home/circle_img5.png"),
      //   title: "亲子游",
      //   road: "/qin"
      // }
      // ],
      paths: [
        {
          id: 1,
          road: "/tian"
        },
        {
          id: 2,
          road: "/hot"
        },
        {
          id: 3,
          road: "/zhou"
        },
        {
          id: 4,
          road: "/qin"
        },
      ],
      goods: [
      ],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    currentCity() {
      this.$store.dispatch("actchangecity", {
        city: this.currentCity
      })
    }
  },
  //方法集合
  methods: {
    // 获取当前位置的方法
    getCurrentCity({ BMap }) {
      //重新获取位置时清空城市名
      // this.currentCity = ""
      const geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition((result) => {
        if (geolocation.getStatus() === 0) {
          // console.log(result.address.city);
          var city = result.address.city;
          city = city.replace("市", "");
          // console.log(city);
          this.$store.state.city = city;
          // console.log(this.$store.state.city);
          this.currentCity = city;
          this.getTian();
        } else {
          this.currentCity = "定位失败"
        }
      })
    },

    //获取推荐景点
    async getTui() {
      let result = await TuiApi();
      // console.log(result.data.data);
      this.jingdians = result.data.data.slice(0, 6);
    },


    //获取天气
    async getTian() {
      let result = await WeatherApi({
        city: this.currentCity
      });
      // console.log(result.data.data);
      // this.jingdians = result.data.data;
      // console.log(result.data.data.tem_day)
      this.tem_day = result.data.data.tem_day;
      this.tem_night = result.data.data.tem_night;
      this.wea_img = result.data.data.wea_img;
    },

    //获取热门景点
    async getHot() {
      let result = await HotJing({
        keyword: this.currentCity
      });
      // console.log(result.data.data);
      this.goods = result.data.data;
      // console.log(this.goods);
    },

    cityFn() {
      this.$router.push("/cheng")
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
    this.getHot();
    if (!this.$store.state.city) {
      //获取城市位置
      this.getCurrentCity();
      this.$store.commit("changeCity", this.currentCity)
    } 
    // else {
    //   this.currentCity = this.$store.state.city;
    //   this.$store.commit("changeCity", this.currentCity)
    // }
  },
  beforeUpdate() { }, //生命周期 - 更新之前
  updated() { }, //生命周期 - 更新之后
  beforeDestroy() { }, //生命周期 - 销毁之前
  destroyed() { }, //生命周期 - 销毁完成
  activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style></style>