import service from "@/utils/request";

// http://192.168.60.65:8080/login/pwd  token  "phone":"18639105623"  "password":"123456" 侯(账号密码登录)

// http://192.168.60.65:8080/login/validateCode 获取验证码 "phone":"18821498468"侯 get

//http://192.168.60.67:8080/login/phone 验证码登录 "phone":"17839671580" code:"4118"贾 post

//http://192.168.60.67:8080/login/pwd 账号密码登录 贾 post

//http://192.168.60.67:8080/login 新增用户 贾  post

//http://192.168.60.67:8080/login/logOut 退出登录 Get

//手机密码登录
export const LoginApi = (data) => {
  return service({
    url: "/login/pwd",
    method: "post",
    data,
  });
};

//验证码登录
export const LoginApie = (data) => {
  return service({
    url: "/login/phone",
    method: "post",
    data,
  });
};

//获取验证码
export const LoginApis = (params) => {
  return service({
    url: "/login/validateCode",
    method: "get",
    params,
  });
};

//退出登录
export const LoginOut = (params) => {
  return service({
    url: "/login/logOut ",
    method: "get",
    params,
  });
};
