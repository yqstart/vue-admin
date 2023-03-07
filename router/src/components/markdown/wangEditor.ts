export default class {
  editor: wangEditor;
  constructor(el: string, config: { [key: string]: any }, callback: Function) {
    this.editor = new wangEditor(el);
    this.editor.config.height = config.height;

    this.editor.config.onchange = callback;
    this.editor.config.uploadImgServer = config.uploadImgServer;
    this.editor.config.uploadImgHooks = this.uploadImage();
    this.editor.create();

    this.editor.txt.html(config.modelValue);
  }

  private uploadImage() {
    return {
      // // 上传图片之前
      // before: function (xhr) {
      //   console.log(xhr);
      //
      //   // 可阻止图片上传
      //   return {
      //     prevent: true,
      //     msg: "需要提示给用户的错误信息",
      //   };
      // },
      // // 图片上传并返回了结果，图片插入已成功
      // success: function (xhr) {
      //   console.log("success", xhr);
      // },
      // // 图片上传并返回了结果，但图片插入时出错了
      // fail: function (xhr, editor, resData) {
      //   console.log("fail", resData);
      // },
      // // 上传图片出错，一般为 http 请求的错误
      // error: function (xhr, editor, resData) {
      //   console.log("error", xhr, resData);
      // },
      // // 上传图片超时
      // timeout: function (xhr) {
      //   console.log("timeout");
      // },
      // // 图片上传并返回了结果，想要自己把图片插入到编辑器中
      // // 例如服务器端返回的不是 { errno: 0, data: [...] } 这种格式，可使用 customInsert
      customInsert: function (insertImgFn: Function, result: any) {
        // result 即服务端返回的接口
        console.log("customInsert", result);
        // insertImgFn 可把图片插入到编辑器，传入图片 src ，执行函数即可
        insertImgFn(result.result.url);
      },
    };
  }
}
