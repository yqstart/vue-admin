import { http } from "@/plugins/axios";

export interface Article {
  id: string;
  title: string;
  content: string;
}

class ArticleApi {
  async article() {
    return http.request<Article>({
      url: "article",
    });
  }

}

export default new ArticleApi();
