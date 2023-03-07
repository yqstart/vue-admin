import { http } from "@/plugins/axios";

export interface User {
  name: string;
  age: number;
  avatar: string;
  permissions: string[];
}

interface Login {
  token: string;
}

class UserApi {
  async info() {
    return http.request<User>({
      url: "info",
    });
  }

  async login(data: any) {
    return http.request<Login>({
      url: "login",
      method: "post",
      data,
    });
  }
}

export default new UserApi();
