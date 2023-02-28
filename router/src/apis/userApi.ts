import { http } from "@/plugins/axios";

interface User {
  name: string,
  age: number,
  avatar: string
}

class UserApi {
  async info() {
    return http.request<User>({
      url: "info",
    });
  }
}

export default new UserApi();
