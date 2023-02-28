import Axios from "@/plugins/axios/axios";

const http = new Axios({
  baseURL: "/api",
  timeout: 10000,
  headers: {},
});

export { http };
