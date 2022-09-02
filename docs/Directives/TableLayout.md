# TableLayout

<ContainerBox title="介绍">
::: slot desc
初学CSS对表单进行布局时，使用的表格布局
:::
</ContainerBox>

<ContainerBox title="使用">
::: slot desc

引入参考 [准备工作](/Directives/base/start.html#准备工作)

:::
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
<div class="demoBox">
<Directives-TableLayout-index-a />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <table class="table" v-tableLayout="['right', 'left']">
    <tr>
      <td>QQ：</td>
      <td><input type="text" /></td>
    </tr>
    <tr>
      <td>密码：</td>
      <td><input type="text" /></td>
    </tr>
    <tr>
      <td>手机号：</td>
      <td><input type="text" /></td>
    </tr>
    <tr>
      <td>家庭住址：</td>
      <td><input type="text" /></td>
    </tr>
    <tr>
      <td>大学：</td>
      <td><input type="text" /></td>
    </tr>
    <tr>
      <td>身份证号：</td>
      <td><input type="text" /></td>
    </tr>
  </table>
</template>
<style scoped lang="less">
.table {
  width: 300px;
  border-collapse: collapse;
  input {
    border: none !important;
    border-bottom: 1px solid #000 !important;
  }
}
</style>
```
:::
</ShowCode>

<ShowCode>
::: slot codes
```js
const tableLayout = {
  inserted(el, { value }) {
    el.style.cssText = `
      border-collapse: collapse;
    `;
    [...el.querySelectorAll("td")].forEach((item, index) => {
      item.style.wordBreak = "break-all";
      item.style.textAlign = index % 2 ? value[1] : value[0];
    });
  },
}
```
:::
</ShowCode>
</ContainerBox>

<ContainerBox title="其他对齐方式">
<div class="demoBox">
<Directives-TableLayout-index-b />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <table class="table" v-tableLayout="['left', 'right']">
    <tr>
      <td>QQ：</td>
      <td><input type="text" /></td>
    </tr>
    <tr>
      <td>密码：</td>
      <td><input type="text" /></td>
    </tr>
    <tr>
      <td>手机号：</td>
      <td><input type="text" /></td>
    </tr>
    <tr>
      <td>家庭住址：</td>
      <td><input type="text" /></td>
    </tr>
    <tr>
      <td>大学：</td>
      <td><input type="text" /></td>
    </tr>
    <tr>
      <td>身份证号：</td>
      <td><input type="text" /></td>
    </tr>
  </table>
</template>
<style scoped lang="less">
.table {
  width: 300px;
  border-collapse: collapse;
  td {
    padding: 0 !important;
    border: 1px solid #000 !important;
    input {
      border: none !important;
      border-bottom: 1px solid #000 !important;
    }
  }
}

tr {
  background-color: transparent;
}
</style>
```
:::
</ShowCode>
</ContainerBox>



<ContainerBox title="value">
::: slot desc

| 说明                                                         | 类型  | 默认值 |
| ------------------------------------------------------------ | ----- | ------ |
| [0]：第一列对齐方式<br />[1]：第二列对齐方式<br />[2]：第三列对齐方式 | Array | -      |

:::
</ContainerBox>
