# $fmtByte

<ContainerBox title="介绍">
::: slot desc
一般用于上传文件时限制文件上传大小
:::
</ContainerBox>

<ContainerBox title="基础用法">
::: slot desc
返回一个数组，数组元素分别是`['大小', '单位', '大小及单位']`
:::
```js
$fmtByte(2000); //['1.95', 'KB', '1.95 KB']
$fmtByte(2048); //['2.00', 'KB', '2.00 KB']
```
<ShowCode>
::: slot codes
```js
export function $fmtByte(bytes) {
  if (!bytes) return [0, "B", "0 B"];
  let k = 1024,
    size = 0,
    sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    i = Math.floor(Math.log(bytes) / Math.log(k));
  size = (bytes / k ** i).toFixed(2) ? (bytes / k ** i).toFixed(2) : 0;
  return [parseFloat(size), sizes[i], `${ size } ${ sizes[i] }`];
}
```
:::
</ShowCode>
</ContainerBox>