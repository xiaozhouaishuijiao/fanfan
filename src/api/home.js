import service from "@/utils/request";

//获取天气API
//http://192.168.60.67:8080/weather?city=郑州 get
export const WeatherApi = (params) => {
  return service({
    url: "/weather",
    method: "get",
    params,
  });
};

//热门景点API
//http://192.168.60.67:8080/search get
export const TuiApi = () => {
  return service({
    url: "/hotPlace/search",
    method: "get",
  });
};

// 定位模块API
//http://192.168.60.67:8080/place get
export const DingApi = (params) => {
  return service({
    url: "/lcoation",
    method: "get",
    params,
  });
};

//模糊查询城市

export const MohuSearch = (params) => {
  return service({
    url: "/homeCity",
    method: "get",
    params,
  });
};

//查询历史选择城市

export const HistorySearch = (params) => {
  return service({
    url: "/homeCity/historyCity",
    method: "get",
    params,
  });
};

//查询热门出发城市

export const HotSearch = (params) => {
  return service({
    url: "/homeCity/hotCity",
    method: "get",
    params,
  });
};

//大写字母查询城市

export const DaxieSearch = (params) => {
  return service({
    url: "/homeCity/letter",
    method: "get",
    params,
  });
};

//城市名查询城市

export const NameSearch = (params) => {
  return service({
    url: "/homeCity/locationCity",
    method: "get",
    params,
  });
};

//热点景点列表
export const HotJing = (params) => {
  return service({
    url: "/hotPlace",
    method: "get",
    params,
  });
};
