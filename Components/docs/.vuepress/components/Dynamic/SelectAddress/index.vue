<template>
  <el-cascader
    :options="address"
    :props="props"
    :value="value"
    placeholder="选择地址"
    @change="fn"
    style="width: 100%"
  >
  </el-cascader>
</template>

<script>
import address from "./address.js";
export default {
  props: {
    /* 返回省市区代码还是中文，默认为代码 */
    code: {
      type: Boolean,
      default: true,
    },
    value: {
      type: Array,
      default() {
        return ["510000", "510100", "510107"];
      },
    },
  },
  name: "LibSelectAddress",
  data() {
    this.address = address;
    return {
      props: {
        value: "value",
        label: "text",
        children: "children",
      },
    };
  },
  created() {
    this.props.value = this.code ? "value" : "text";
  },
  methods: {
    fn(v) {
      this.$emit("input", v);
      this.$emit("change", v);
    },
  },
};
</script>
