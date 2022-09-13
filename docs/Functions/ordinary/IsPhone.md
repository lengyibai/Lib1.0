# $isPhone
<ContainerBox title="介绍">
::: slot desc
判断是否移动端访问
:::
</ContainerBox>

<ContainerBox title="基础用法">
::: slot desc
返回`Boolean`值
:::
<ShowCode>
::: slot codes
```js
export function $isPhone() {
  return /mobile/i.test(navigator.userAgent);
}
```
:::
</ShowCode>
</ContainerBox>