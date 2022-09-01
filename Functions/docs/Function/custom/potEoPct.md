# $potEoPct
<ContainerBox title="介绍">
::: slot desc
把计算好的小数用来展示百分比进度
:::
</ContainerBox>

<ContainerBox title="基础用法">
```js
$potEoPct(0.12345, 2); //12.35
$potEoPct("12.34%"); //0.1234
```
<ShowCode>
::: slot codes

```js
export function $potEoPct(str, ret = 0) {
  if (typeof str == "string") return str.replace("%", "") / 100;
  return Number((str * 100).toFixed(ret));
}
```
:::
</ShowCode>
</ContainerBox>

<ContainerBox title="Params">
::: slot desc
| 参数 | 说明                     | 类型   |
| ---- | ------------------------ | ------ |
| str  | 传递百分比或数字         | String |
| ret  | 保留几位小数，默认不保留 | Number |
:::
</ContainerBox>