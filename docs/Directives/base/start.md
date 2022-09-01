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

<ContainerBox title="创建文件">
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

## 使用

<ContainerBox title="如下">
::: slot desc

```vue

<div v-bbb></div>
```

:::
</ContainerBox>
