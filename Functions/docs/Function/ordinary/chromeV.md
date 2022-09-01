# $chromeV
<ContainerBox title="介绍">
::: slot desc
判断用户浏览器到没达到要求的版本，没达到让他升级
:::
</ContainerBox>

<ContainerBox title="基础用法">
```js
$chromeV()
```
<ShowCode>
::: slot codes
```js
export function $chromeV() {
  let v = "";
  navigator.userAgent.split(" ").forEach((item) => {
    /chrome/i.test(item) && (v = item);
  });
  return Number(v.split("/")[1].split(".")[0]);
}
```
:::
</ShowCode>
</ContainerBox>