// test.ts
import { MockMethod } from "vite-plugin-mock";
export default [
  {
    url: "/api/upload/image",
    method: "post",
    response: () => {
      return {
        code: 200,
        errno: 0,
        data: {
          url: "abc.jpg",
        },
        status: "success",
        message: "测试成功",
      };
    },
  },
] as MockMethod[];
