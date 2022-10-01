# $hideMobile
<ContainerBox title="介绍">
::: slot desc
将手机号中间部分替换为`*`
:::
</ContainerBox>

<ContainerBox title="基础用法">
```js
$hideMobile(12345678910); //123****8910
```
<ShowCode>
::: slot codes

```js
export function $hideMobile(mobile) {
  const m = mobile.toString()
  return m.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2")
}
```
:::
</ShowCode>
</ContainerBox>

<ContainerBox title="Params">
::: slot desc
| 参数 | 说明                     | 类型   |
| ---- | ------------------------ | ------ |
| mobile  | 传递手机号         | String | Number |
:::
</ContainerBox>