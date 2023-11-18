import service from "@/utils/request";

// http://192.168.60.65:8080/login/pwd  token  "phone":"18639105623"  "password":"123456" 侯(账号密码登录)

// http://192.168.60.65:8080/login/validateCode 获取验证码 "phone":"18821498468"侯 get

//http://192.168.60.67:8080/login/phone 验证码登录 "phone":"17839671580"贾 post

//http://192.168.60.67:8080/login/pwd 账号密码登录 贾 post

//http://192.168.60.67:8080/login 新增用户 贾  post

export const RegisterApi = (params) => {
  return service({
    url: "/login/validateCode",
    method: "get",
    params,
  });
};

export const RegisterApie = (data) => {
  return service({
    url: "/login",
    method: "post",
    data,
  });
};
