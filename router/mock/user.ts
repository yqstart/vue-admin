// test.ts
import { MockMethod } from "vite-plugin-mock";
import { Random } from "mockjs";
export default [
  {
    url: "/api/info",
    method: "get",
    response: () => {
      return {
        code: 200,
        result: {
          name: "测试数据",
          age: "18",
          avatar: "./1.png",
        },
        type: "success",
        message: "测试成功",
      };
    },
  },
  {
    url: "/api/login",
    method: "post",
    response: () => {
      return {
        code: 200,
        result: {
          token: Random.string(10),
        },
        type: "success",
        message: "登录成功",
      };
    },
  },
] as MockMethod[];
