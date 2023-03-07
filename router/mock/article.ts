// test.ts
import { MockMethod } from "vite-plugin-mock";
import { Random } from "mockjs";
export default [
  {
    url: "/api/article",
    method: "get",
    response: () => {
      return {
        code: 200,
        result: new Array(20).fill(1).map((a, index) => {
          return {
            id: index,
            title: Random.ctitle(),
            content: Random.cparagraph(),
          };
        }),
        type: "success",
        message: "测试成功",
      };
    },
  },
] as MockMethod[];
