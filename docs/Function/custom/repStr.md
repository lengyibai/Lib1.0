# $repStr
<ContainerBox title="介绍">
::: slot desc
可去掉不想要的字符或替换成自己想要的字符

可以将多个字符替换成一个
:::
</ContainerBox>

<ContainerBox title="基础用法">
```js
const a = "id: GROUP@TGS#GROUP4X4JBGRH2";
$repStr(a, "GROUP"); //id: @TGS#4X4JBGRH2

const b = "Hello World!";
$repStr(b, "World", 'Vue'); //Hello Vue!

const c = "React! Angular!";
$repStr(c, "React|Angular", 'Vue'); //Vue! Vue!
```
<ShowCode>
::: slot codes
```js
export function $repStr(str, match, rep = "") {
  return str.replace(new RegExp(match, "g"), rep);
}
```
:::
</ShowCode>
</ContainerBox>

<ContainerBox title="Params">
::: slot desc
| 参数  | 说明                                      | 类型             |
| ----- | ----------------------------------------- | ---------------- |
| str   | 值                                        | Number \| String |
| match | 要匹配的字符串，使用`|`可匹配多个进行替换 | String           |
| rep   | 替换为指定字符，默认替换为空白字符        | String           |
:::
</ContainerBox>