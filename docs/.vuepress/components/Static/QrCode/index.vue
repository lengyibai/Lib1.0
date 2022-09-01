<template>
  <div class="LibQrCode">
    <img
      :src="imgUrl"
      :style="{
        width: size,
        height: size,
      }"
    />

    <component
      :is="vueQr"
      :logoSrc="icon"
      :callback="test"
      :text="text"
      :size="1000"
      :bindElement="false"
    ></component>
  </div>
</template>
<script>
export default {
  name: "LibQrCode",
  props: {
    //需要被转成二维码的文字，注：为空会报错，必须在使用出进行判断
    text: {
      type: String,
      default: "暂无数据",
    },
    icon: {
      default: "",
    },
    size: {
      type: String,
      default: "100px",
    },
  },
  data() {
    return {
      imgUrl: "",
      vueQr: null,
    };
  },
  mounted() {
    import("vue-qr").then((module) => {
      this.vueQr = module.default;
    });
  },
  methods: {
    test(dataUrl) {
      this.imgUrl = dataUrl;
    },
  },
};
</script>
