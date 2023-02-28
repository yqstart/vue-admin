// test.ts

import { MockMethod } from "vite-plugin-mock";
export default [
  {
    url: "/api/info",
    method: "get",
    response: () => {
      return {
        code: 0,
        result: {
          name: "测试数据",
          age: '18',
          avatar: './1.png'
        },
        type: 'success',
        message: '测试成功'
      };
    },
  },
] as MockMethod[];
