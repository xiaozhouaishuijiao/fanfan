import service from "@/utils/request";

//达人圈推荐数据
export const DaTuipi = (params) => {
  return service({
    url: "/circleFriends/likeCount",
    method: "get",
    params,
  });
};

//达人圈最新数据
export const DanewApi = (params) => {
  return service({
    url: "/circleFriends/createTime",
    method: "get",
    params,
  });
};

//达人圈精选数据
export const DaselectApi = (params) => {
  return service({
    url: "/circleFriends/collectCount",
    method: "get",
    params,
  });
};

//达人圈夏日海岛数据
export const DaSummerApi = (params) => {
  return service({
    url: "/circleFriends/keyword",
    method: "get",
    params,
  });
};

//达人圈发布功能接口

export const FabuApi = () => {
  return service({
    url: "/fa",
    method: "get",
  });
};
