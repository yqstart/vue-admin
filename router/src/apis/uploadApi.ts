import { http } from "@/plugins/axios";

export interface Upload {
  url: string;
}

class UploadApi {
  async uploadImage(data: FormData) {
    return http.request<Upload>({
      url: "upload/image",
      method: "post",
      data,
    });
  }
}

export default new UploadApi();
