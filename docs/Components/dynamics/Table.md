# Table

<ContainerBox title="介绍">
::: slot desc
简易的表格组件，满足基本需求
:::
</ContainerBox>

<ContainerBox title="下载并引入">
::: slot desc

[下载组件包](https://gitee.com/lengyibai/component-package/raw/master/LibTable.zip)

引入参考 [引入组件](/Components/Base/start.html#引入组件)

:::
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
<div class="demoBox">
<Dynamics-Table-demo-index />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <LibTable
    class="LibTable"
    :data="tableData"
    :head="['日期', '姓名', '地址', '操作']"
    :sort="['姓名', '地址']"
    @sort-change="sortChange"
  >
    <template #date>
      <span>时间</span>
    </template>

    <template #name>
      <span>名字</span>
    </template>

    <template v-slot:body="{ data }">
      <Table-TableColumn min-width="100">{{data.date}}</Table-TableColumn>
      <Table-TableColumn min-width="100">{{ data.name }}</Table-TableColumn>
      <Table-TableColumn min-width="100">{{ data.address }}</Table-TableColumn>
      <Table-TableColumn min-width="100">
        <button>冻结</button>
      </Table-TableColumn>
    </template>
  </LibTable>
</template>
<script>
export default {
  name: "demo",
  data() {
    return {
      tableData: [
        {
          date: "2022-04-22",
          name: "冷弋白",
          address: "四川自贡",
          bgColor: "rgba(192, 58, 43, 0.1)",
        },
        {
          date: "2022-04-23",
          name: "lengyibai",
          address: "四川自贡",
        },
        {
          date: "2022-04-24",
          name: "lyb",
          address: "四川成都",
        },
        {
          date: "2022-04-24",
          name: "张三",
          address: "四川成都",
          bgColor: "rgba(39, 174, 95, 0.1)",
        },
        {
          date: "2022-04-24",
          name: "张三",
          address: "四川自贡",
        },
        {
          date: "2022-04-24",
          name: "张三",
          address: "四川成都",
        },
        {
          date: "2022-04-24",
          name: "张三",
          address: "四川自贡",
          bgColor: "rgba(41, 127, 185, 0.1)",
        },
      ],
    };
  },
  methods: {
    sortChange(v) {
      console.warn("排序触发：", v);
    },
  },
};
</script>
<style scoped lang="less">
.LibTable {
  width: 100%;
}
</style>
```
:::
</ShowCode>
</ContainerBox>

## API

<ContainerBox title="Table Props">
::: slot desc

| 参数 | 说明           | 类型  |
| ---- | -------------- | ----- |
| data | 数据           | Array |
| head | 头部名称       | Array |
| sort | 需要排序的名称 | Array |

:::
</ContainerBox>

<ContainerBox title="Table Events">
::: slot desc

| 参数       | 说明     | 参数               |
| ---------- | -------- | ------------------ |
| sortChange | 排序触发 | ['字段名'，索引号] |

:::
</ContainerBox>

<ContainerBox title="Table Slots">
::: slot desc

| 参数        | 说明                     | 参数              |
| ----------- | ------------------------ | ----------------- |
| head{index} | 头部插槽，插槽名为字段名 | -                 |
| body        | 必写，表格写入插槽内     | { data } 表格数据 |

:::
</ContainerBox>

<ContainerBox title="TableColumn Props">
::: slot desc

| 参数      | 说明           | 类型   | 默认值      |
| --------- | -------------- | ------ | ----------- |
| min-width | 单元格最小宽度 | String | 0（自适应） |

:::
</ContainerBox>
