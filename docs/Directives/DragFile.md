# DragFile

<ContainerBox title="介绍">
::: slot desc
一般用于拖拽上传
:::
</ContainerBox>

<ContainerBox title="使用">
::: slot desc

引入参考 [准备工作](/Directives/base/start.html#准备工作)

:::
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
:::slot desc
打开控制台查看解析内容
:::
<div class="demoBox">
<Directives-DragFile-index />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="DownDrag" v-dragFile="dragFile">
    <span>将文件拖动到此处解析</span>
    <div class="list" v-for="(item, index) in fileList" :key="index">
      {{ item }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fileList: [],
    };
  },
  methods: {
    dragFile(file) {
      console.log(file);
      this.fileList = file.map((item) => {
        return item.name;
      });
    },
  },
};
</script>
<style scoped>
.DownDrag {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 50vh;
  border: 0.35vw dashed #000;
  font-size: 3vw;
}
.list {
  font-size: 2.5vw;
}
</style>
```
:::
</ShowCode>

<ShowCode>
::: slot codes

```js
const DragFile = {
  inserted(el, { value }) {
    el.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    el.addEventListener("drop", (e) => {
      e.preventDefault();
      let file = [...e.dataTransfer.items].map((item) => {
        if (item.kind === "file") {
          return item.getAsFile();
        }
      });
      value(file);
    });
  },
};
```

:::
</ShowCode>
</ContainerBox>

<ContainerBox title="value">
::: slot desc

| 说明                         | 类型     |
| ---------------------------- | -------- |
| 解析回调，回调参数为文件列表 | Function |

:::
</ContainerBox>
