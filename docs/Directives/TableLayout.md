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
</ContainerBox>

<ContainerBox title="value">
::: slot desc

| 说明                                                         | 类型  | 默认值 |
| ------------------------------------------------------------ | ----- | ------ |
| [0]：第一列对齐方式<br />[1]：第二列对齐方式<br />[2]：第三列对齐方式 | Array | -      |

:::
</ContainerBox>
