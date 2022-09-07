# 快速上手

<ContainerBox title="介绍">
::: slot desc
通过本章节你可以了解到`自定义指令`的基本使用姿势
:::
</ContainerBox>

## 获取自定义指令

<ContainerBox title="复制代码">
::: slot desc
直接复制代码即可使用
:::
</ContainerBox>

## 准备工作

<ContainerBox title="全局注册">
::: slot desc

1. 在项目内创建一个文件夹及文件`src/utils/directives.js`

2. 将复制的自定义指令粘贴进`directives.js`文件，见代码

```js
//directives.js

const aaa = {
  inserted(el, binding) {},
};
const bbb = {
  inserted(el, binding) {},
};
const ccc = {
  inserted(el, binding) {},
};
let directives = {
  aaa,
  bbb,
  ccc
};

import Vue from "vue";
Object.keys(directives).forEach((d) => {
  Vue.directive(d, directives[d]);
});
```

4. 在`main.js`文件内引入`directives.js`

```js
//main.js

import "./utils/directives.js";
```

:::
</ContainerBox>

<ContainerBox title="局部注册">
::: slot desc
你也可以直接在组件内注册自定义指令

```vue
<template>
  <div v-dragFile="dragFile">将文件拖动到此处解析</div>
</template>
<script>
export default {
  directives: {
    dragFile: {
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
    },
  }
};
</script>
```
:::
</ContainerBox>