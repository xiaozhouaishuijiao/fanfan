<!-- 发布详情 -->
<template>
    <div class="details">
        <div class="contentmain">
            <div class="details-header">
                <div class="header_left">
                    <van-icon style="font-weight: 600" name="arrow-left" />
                    <div class="text-left">
                        <button><img src="" alt="" /></button>
                        <h4>任袁泰山</h4>
                    </div>
                </div>
                <div class="header_right">
                    <button>关注</button>
                    <van-icon name="ellipsis" />
                </div>
            </div>
            <div class="banner">
                <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                    <van-swipe-item><img src="" alt="" /></van-swipe-item>
                    <van-swipe-item><img src="" alt="" /></van-swipe-item>
                    <van-swipe-item><img src="" alt="" /></van-swipe-item>
                    <van-swipe-item><img src="" alt="" /></van-swipe-item>
                    <van-swipe-item><img src="" alt="" /></van-swipe-item>
                    <van-swipe-item><img src="" alt="" /></van-swipe-item>
                    <van-swipe-item><img src="" alt="" /></van-swipe-item>
                    <van-swipe-item><img src="" alt="" /></van-swipe-item>
                    <van-swipe-item><img src="" alt="" /></van-swipe-item>
                </van-swipe>
            </div>
            <div class="datails-des">
                <div class="des-box">
                    <div class="des-img">
                        <img src="" alt="" />
                        <span>目的地</span>
                    </div>
                    <div class="right-text">
                        <p>成都</p>
                        <span>2人收藏</span>
                    </div>
                </div>
            </div>
            <div class="details-intruduce">
                <p>
                    成都周边1小时看海,免费江滩露营地<br />最近去了一个成都周边超美的免费露营地，在三岔<br />湖，那你可以烧烤，划桨板，皮划艇，看着鸭群从你<br />面前的湖水缓缓，有过特别舒服。
                </p>
                <div class="intruduce-pos">
                    <ul>
                        <li>🎈地址：简阳西坝嘴</li>
                        <li>🎈导航:西坝嘴(高德)</li>
                        <li>🎈无门票,停车费10元</li>
                    </ul>
                </div>
            </div>
            <div class="play-recommen">
                <p>👉玩法推荐:</p>
                <ul>
                    <li>
                        <span><van-icon
                                name="success" /></span>超大的湖面，在湖边可以路亚🎣(钓上来直接开<br />烤，老爽了)，踩水，我还看到有人带了奖板和皮划艇去湖上荡漾(穿好救生衣注意安全，水还是挺深的
                    </li>
                    <li>
                        <span><van-icon name="success" /></span>V周边有农户，可以吃饭可以上厕所，还能摘批 把。
                    </li>
                    <li>
                        <span><van-icon name="success" /></span>周围一些农家小道徒步也不错
                    </li>
                </ul>
            </div>
            <div class="text-lable">
                <ul>
                    <li><span>#春日漫游计划#</span></li>
                    <li><span>#春日漫游计划#</span></li>
                    <li><span>#春日漫游计划#</span></li>
                </ul>
            </div>
            <div class="release-time">
                <p><span>发布于</span>05-23 17:42</p>
                <div class="details-tx">
                    <div class="tx-pic">
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <span>104人觉得很赞</span>
                    </div>
                </div>
            </div>

            <div class="comment-box">
                <h2>全部评论<span>(26)</span></h2>
                <ul class="comment-list">
                    <li>
                        <div class="comment-top">
                            <div class="top-left">
                                <div><img src="" alt="" /></div>
                                <span>大轩子</span>
                            </div>
                            <div class="top-right">
                                <div><van-icon name="like-o" /></div>
                                <span>0</span>
                            </div>
                        </div>
                        <div class="text-comment">
                            <p>天空的颜色是粉紫色</p>
                            <span>05-29 10:23</span>
                        </div>
                    </li>
                    <li>
                        <div class="comment-top">
                            <div class="top-left">
                                <div><img src="" alt="" /></div>
                                <span>朵朵</span>
                            </div>
                            <div class="top-right">
                                <div><van-icon name="like-o" /></div>
                                <span>0</span>
                            </div>
                        </div>
                        <div class="text-comment">
                            <p>看上去很不错</p>
                            <span>05-29 10:23</span>
                        </div>
                    </li>
                    <button>查看全部评论 ></button>
                </ul>
                <div class="comment-inp">
                    <ul>
                        <li><input type="text" placeholder="写个评论吧..."></li>
                        <li><van-icon name="like-o" /></li>
                        <li><van-icon name="chat-o" /></li>
                        <li><van-icon name="star-o" /></li>
                        <li><van-icon name="share-o" /></li>
                    </ul>
                </div>
            </div>
        </div>
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
        return {};
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {},
    beforeCreate() { }, //生命周期 - 创建之前
    //生命周期 - 创建完成（可以访问当前this实例）
    created() { },
    beforeMount() { }, //生命周期 - 挂载之前
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() { },
    beforeUpdate() { }, //生命周期 - 更新之前
    updated() { }, //生命周期 - 更新之后
    beforeDestroy() { }, //生命周期 - 销毁之前
    destroyed() { }, //生命周期 - 销毁完成
    activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less" scoped>
.contentmain {
    background-color: #fff;
}

.details {
    width: 100%;
    height: 100%;
    padding: 10px 10px 0px 10px;
    box-sizing: border-box;
    background-color: #fff;

    .details-header {
        width: 100%;
        height: auto;
        padding-bottom: .75rem;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .header_left {
            width: auto;
            height: auto;
            display: flex;
            align-items: center;

            .text-left {
                width: auto;
                height: auto;
                display: flex;
                align-items: center;
                margin-left: .5rem;

                button {
                    width: 1.5rem;
                    height: 1.5rem;
                    margin-right: .5rem;
                    border: 0;
                    border-radius: 50%;
                    background-color: #ccc;

                    img {
                        width: 100%;
                        height: 100%;

                    }
                }

                h4 {
                    font-size: .85rem;
                    font-weight: 600;

                }
            }
        }

        .header_right {
            width: auto;
            height: auto;

            button {
                border: 0;
                width: 3.25rem;
                height: 1.53rem;
                font-size: .8rem;
                background: linear-gradient(to bottom, #feb659, #fda138);
                border-radius: 2.5rem;
                color: #ffffff;
                margin-right: 1.5rem;
                text-align: center;
                line-height: 1.53rem;
            }

            .van-icon {
                font-size: 21px;
                font-weight: 600;
                transform: rotate(90deg);
            }
        }


    }



    .banner {
        width: 17.5rem;
        height: 25rem;

        // background-color: #fda138;

        .my-swipe {
            width: 100%;
            height: 100%;
        }

        img {
            width: 100%;
            height: 100%;
        }
    }

    .datails-des {
        width: 100%;
        height: 3.5rem;
        margin: 10px 0;

        .des-box {
            width: 9rem;
            height: 100%;
            background-color: #f7f7f7;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            .des-img {
                width: 4rem;
                height: 100%;
                position: relative;

                img {
                    width: 100%;
                    height: 100%;
                }

                span {
                    display: inline-block;
                    width: 3rem;
                    height: .80rem;
                    background-color: #8f8f8f;
                    position: absolute;
                    top: 0rem;
                    left: -0.05rem;
                    font-size: .7rem;
                    text-align: center;
                    color: #ffffff;
                    border-top-left-radius: .5rem;
                    border-bottom-right-radius: .5rem;


                }
            }

            .right-text {
                p {
                    font-size: .8rem;
                    font-weight: 600;
                }

                span {
                    font-size: .75rem;
                    color: #fcea8f;
                }
            }
        }
    }

    .details-intruduce {
        width: 100%;
        height: auto;
        font-size: .75rem;
        font-family: "Microsoft YaHei";

        p {
            // 文字上下间隔
            text-align: left;
            line-height: 1.2rem;
            letter-spacing: 0.4px;
        }

        .intruduce-pos {
            width: 100%;
            height: auto;

            ul {
                width: 100%;
                height: auto;
                display: flex;
                flex-direction: column;
                line-height: 1.25rem;


                li {
                    text-align: left;
                }
            }
        }
    }

    .play-recommen {
        width: 100%;
        height: auto;
        font-size: .75rem;

        p {
            text-align: left;
            margin-top: 1rem;
            margin-bottom: .25rem;
        }

        ul {
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;

            li {
                display: flex;
                // align-items: ;
                line-height: 1.25rem;
                text-align: left;

                span {
                    .van-icon {
                        font-size: 1.15rem;
                        font-weight: 600;
                    }
                }
            }
        }
    }

    .text-lable {
        width: 100%;
        height: auto;
        padding-left: 1.25rem;
        box-sizing: border-box;
        text-align: left;

        ul {
            width: 100%;
            height: auto;
            display: flex;
            flex-wrap: wrap;

            li {
                width: 50%;
                font-size: .75rem;
                margin-top: .75rem;
                margin-bottom: .7rem;
                color: #696969;

                span {
                    width: auto;
                    height: auto;
                    border: 1px solid #ccc;
                    border-radius: .3rem;
                    box-sizing: border-box;
                }
            }
        }
    }

    .release-time {
        width: 100%;
        height: auto;

        p {
            color: #ccc;
            font-size: .6rem;
            margin-bottom: 1rem;
            text-align: left;

            span {
                margin-right: .25rem;
            }
        }

        .details-tx {
            width: 100%;
            height: auto;
            background-color: #f7f7f7;


            .tx-pic {
                width: auto;
                height: auto;
                padding: .4rem;
                box-sizing: border-box;
                display: flex;
                align-items: center;

                img {
                    width: .75rem;
                    height: .75rem;
                }

                span {
                    font-size: .6rem;
                    color: #ccc;
                }
            }
        }
    }

    .comment-box {
        width: 100%;
        height: auto;
        margin-top: 1rem;

        h2 {
            font-size: 1.15rem;
        }

        .comment-list {
            width: 100%;
            height: auto;

            display: flex;
            flex-direction: column;
            align-items: center;

            li {
                width: 100%;
                height: auto;
                padding: .3rem 0rem;
                box-sizing: border-box;


                .comment-top {
                    width: 100%;
                    height: auto;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .top-left {
                        width: auto;
                        height: auto;
                        display: flex;
                        align-items: center;

                        div {
                            width: 1.5rem;
                            height: 1.5rem;

                            img {
                                width: 100%;
                                height: 100%;
                            }

                        }

                        span {
                            font-size: .75rem;
                            color: #ccc;
                            margin-left: .25rem;
                        }
                    }

                    .top-right {
                        width: auto;
                        height: auto;
                        display: flex;
                        align-items: center;
                        flex-direction: column;
                        color: #ccc;

                        justify-content: space-between;

                        div {
                            width: .75rem;
                            height: .75rem;

                            img {
                                width: 100%;
                                height: 100%;
                            }
                        }

                        span {
                            font-size: .75rem;
                            // margin-left: .25rem;
                            margin-top: .25rem;
                        }
                    }
                }

                .text-comment {
                    width: 100%;
                    height: auto;
                    padding-left: 1.5rem;
                    box-sizing: border-box;

                    p {
                        font-size: .8rem;
                        font-weight: 600;
                    }

                    span {
                        font-size: .6rem;
                        color: #ccc;
                    }
                }
            }

            button {
                border: 0;
                font-size: .85rem;
                font-weight: 600;
                background-color: #ffffff;
                margin-top: 1rem;
            }
        }

        .comment-inp {
            width: 100%;
            height: auto;
            padding: .75rem;
            box-sizing: border-box;

            ul {
                width: 100%;
                height: auto;
                display: flex;
                justify-content: space-around;

                li {
                    flex: 1;
                    margin-right: 1.5rem;

                    input {
                        width: 6rem;
                        height: 1.75rem;
                        border-radius: 2.5rem;
                        border: 0;
                        background-color: #f6f7f9;
                        font-size: .8rem;
                        // margin-right: 1rem;


                    }

                    .van-icon {
                        width: .75rem;
                        height: .75rem;
                    }
                }
            }
        }
    }

    .van-swipe__indicator--active {
        background-color: gold;
        color: gold;
    }
}
</style>
