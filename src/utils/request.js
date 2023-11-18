import axios from "axios";
// 定义一个服务
const service = axios.create({
  baseURL: "/api",
  timeout: 5000,
});

// 拦截请求:
// 判断用户是否登录，如果登录了，后台会生成一个token返回给前端
// 给请求的接口地址中(请求头中)添加token（令牌）
service.interceptors.request.use((config) => {
  // config 是一个对象，包含了请求的所有主体
  console.log(config);
  let token = localStorage.getItem("token");
  if (token) {
    config.headers["token"] = token;
  }
  return config;
});
// 拦截响应：集中管理请求到的数据
// 前端拿到后台给的数据之后，可以对数据进行判断处理
service.interceptors.response.use((response) => {
  return response; //返回请求到的数据,注意页面内的层级,如果此处有data,页面内的赋值要减少一层data
});

export default service;

// 没有拦截版本;
// import axios from "axios";
// // 创建服务
// let service = axios.create({
//   baseURL: "/api",
//   timeout: 5000,
// });

// // 导出
// export default service;
