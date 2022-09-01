# $fmtNum

<ContainerBox title="介绍">
::: slot desc
慕名而来
:::
</ContainerBox>

<ContainerBox title="基础用法">
::: slot desc
```js
$fmtNum(1000); //1,000
```
:::

<ShowCode>
::: slot codes
```js
export function $fmtNum(num) {
  const str = num.toString();
  const reg =
    str.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g;
  return str.replace(reg, "$1,");
}
```
:::
</ShowCode>
</ContainerBox>
