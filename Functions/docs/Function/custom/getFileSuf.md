# $getFileSuf
<ContainerBox title="介绍">
::: slot desc
有些时候我们只想要文件后缀名来判断

但好像又被 [判断是否为指定类型的文件链接](/Function/custom/urlFileType.html) 给替代了
:::
</ContainerBox>

<ContainerBox title="基础用法">
::: slot desc
如果后缀有大写字母，将自动转换为小写
:::
```js
$getFileSuf("冷弋白.123.JPEG"); //jpeg
```
<ShowCode>
::: slot codes
```js
export function $getFileSuf(str) {
  return str.replace(/.+\./, "").toLowerCase();
}
```
:::
</ShowCode>
</ContainerBox>