// test.ts
import { MockMethod } from "vite-plugin-mock";
export default [
  {
    url: "/api/upload/image",
    method: "post",
    response: () => {
      return {
        code: 200,
        result: {
          url: "abc.jpg",
        },
        type: "success",
        message: "测试成功",
      };
    },
  },
] as MockMethod[];
