import uploadApi from "@/apis/uploadApi";

export default class {
  editor: toastui.Editor;
  constructor(el: string, initialValue: string, public height: string) {
    this.editor = new toastui.Editor({
      el: document.querySelector(el),
      initialEditType: "markdown",
      previewStyle: "vertical",
      height: height,
      initialValue: initialValue,
      toolbarItems: this.toolbar(),
    });
    this.ImageHook();
  }

  private ImageHook() {
    this.editor.removeHook("addImageBlobHook");
    this.editor.addHook(
      "addImageBlobHook",
      async (blob: Blob, callback: Function) => {
        const form = new FormData();
        form.append("file", blob, blob.name);
        const res = await uploadApi.uploadImage(form);
        callback(res.result.url, blob.name);
      }
    );
  }

  private toolbar() {
    return [
      ["heading", "bold", "italic", "strike"],
      ["hr", "quote"],
      ["ul", "ol", "task", "indent", "outdent"],
      ["table", "image", "link"],
      ["code", "codeblock"],
      [
        {
          el: this.fullScreen(),
          command: "fullscreen",
          tooltip: "fullscreen",
        },
      ],
    ];
  }

  private fullScreen() {
    const button: HTMLButtonElement = document.createElement("button");
    button.innerHTML = "全屏";
    button.style.margin = "0";
    button.addEventListener("click", () => {
      const editorEl: HTMLDivElement | null = document.querySelector(
        ".toastui-editor-defaultUI"
      );
      editorEl?.classList.toggle("fullScreen");
      this.editor.setHeight(
        this.editor.getHeight() === "100vh" ? this.height : "100vh"
      );
      this.editor.focus();
    });

    document.documentElement.addEventListener(
      "keyup",
      (event: KeyboardEvent) => {
        if (event.key === "Escape" && this.editor.getHeight() === "100vh") {
          const editorEl: HTMLDivElement | null = document.querySelector(
            ".toastui-editor-defaultUI"
          );
          editorEl?.classList.remove("fullScreen");
          this.editor.setHeight(this.height);
        }
        this.editor.focus();
      }
    );
    return button;
  }
}
