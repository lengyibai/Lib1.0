<template>
  <div class="LibRichText" :class="{ disabled: disabled }">
    <component
      :is="quillEditor"
      :disabled="disabled"
      v-model="contentText"
      ref="myQuillEditor"
      :options="editorOption"
      @focus="onEditorFocus($event)"
      @change="onEditorChange($event)"
    ></component>
    <input
      class="QuillEditor-uploader"
      @change="QuillEditorUpload"
      type="file"
      v-show="false"
    />
  </div>
</template>
<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: "",
    },
  },
  name: "LybRichText",
  data() {
    return {
      contentText: "",
      $imageOptimizer: null,
      quillEditor: null,
      editorOption: {
        placeholder: "",
        modules: {
          eeSourceBtn: null,
          toolbar: {
            container: [
              ["bold", "italic", "underline", "strike"], //加粗，斜体，下划线，删除线
              // ["blockquote", "code-block"], //引用，代码块
              // [{ header: 1 }, { header: 2 }], // 标题，键值对的形式；1、2表示字体大小
              [{ list: "ordered" }, { list: "bullet" }], //列表
              // [{ script: "sub" }, { script: "super" }], // 上下标
              // [{ indent: "-1" }, { indent: "+1" }], // 缩进
              // [{ direction: "rtl" }], // 文本方向
              // [{ size: ["small", false, "large", "huge"] }], // 字体大小
              [{ header: [1, 2, 3, 4, 5, 6, false] }], //几级标题
              [{ color: [] }, { background: [] }], // 字体颜色，字体背景颜色
              // [{ font: [] }], //字体
              [{ align: [] }], //对齐方式
              ["clean"], //清除字体样式
              ["image", "video"], //上传图片、上传视频
            ],
            handlers: {
              image: function (value) {
                if (value) {
                  // 触发上传插件
                  document.querySelector(".QuillEditor-uploader").click();
                } else {
                  this.quill.format("image", false);
                }
              },
            },
          },
        },
      },
    };
  },
  watch: {
    value: {
      immediate: true, //立即调用
      handler(v) {
        this.contentText = v;
      },
    },
  },
  mounted() {
    const _this = this;
    const { $imageOptimizer } = require("./js/imageOptimizer.js");
    this.$imageOptimizer = $imageOptimizer;
    import("vue-quill-editor").then((module) => {
      let { quillEditor, Quill } = module.default;
      import("./js/quill.eeSourceBtn.js").then((module) => {
        let { eeSourceBtn } = module;
        Quill.register("modules/eeSourceBtn", eeSourceBtn);
        this.editorOption.modules.eeSourceBtn = eeSourceBtn;
        this.quillEditor = quillEditor;
        this.$nextTick(() => {
          const htmlEditor = document.querySelector(".htmlEditor");
          htmlEditor.addEventListener("blur", function (e) {
            _this.$emit("input", e.target.value);
          });
        });
      });
    });
  },
  methods: {
    blur() {},
    onEditorReady() {},
    onEditorFocus() {}, // 获得焦点事件
    onEditorChange(e) {
      this.$emit("input", e.html);
    },

    // 调用接口上传
    QuillEditorUpload(f) {
      let file = new FormData();
      file.append("file", f.target.files[0]);
      alert("上传图片需要填写上传文件接口");
      /* 上传普通图片 */
      // axios.post('http://upload.....', file).then((res) => {
      //   let quill = this.$refs.myQuillEditor.quill;
      //   let length = quill.getSelection().index; //获取光标所在位置
      //   // 插入图片，res.data.data.src 为服务器返回的图片链接地址
      //   quill.insertEmbed(length, "image", res.data.data.src);
      //   quill.setSelection(length + 1); //调整光标到最后
      // });

      /*  上传压缩图片 */
      // this.$imageOptimizer({
      //   file: f,
      //   ratio: 0.5, //压缩率
      //   maxsize: 1024, //超过多大进行压缩
      //   /* 压缩成功回调 */
      //   success: (data) => {
      //     axios.post('http://upload.....', data).then((res) => {
      //       let quill = this.$refs.myQuillEditor.quill;
      //       let length = quill.getSelection().index; //获取光标所在位置
      //       // 插入图片，res.data.data.src 为服务器返回的图片链接地址
      //       quill.insertEmbed(length, "image", res.data.data.src);
      //       quill.setSelection(length + 1); //调整光标到最后
      //     });
      //   },
      // });
    },
  },
};
</script>
<style>
.quill-editor {
  display: flex;
  height: 100%;
  height: 100%;
  flex-direction: column;
}

.ql-snow.ql-toolbar button,
.ql-snow .ql-toolbar button {
  width: fit-content;
}

.ql-snow .ql-picker-label {
  display: flex;
}

.ql-snow .ql-color-picker .ql-picker-label svg,
.ql-snow .ql-icon-picker .ql-picker-label svg {
  width: 18px;
}

.ql-snow .ql-formats {
  margin-right: 10px;
}
.ql-snow .ql-tooltip {
  top: 0 !important;
  left: 50% !important;
  transform: translateX(-50%);
}
</style>
<style scoped>
.LibRichText {
  position: relative;
  width: 100%;
  height: 100%;
}
.disabled {
  cursor: not-allowed;
  pointer-events: none;
}

textarea {
  width: 100%;
}
</style>
