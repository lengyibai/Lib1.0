# $fmtSec
<ContainerBox title="介绍">
::: slot desc
返回一个数组，数组元素分别是`['时','分','秒','时:分:秒']`
:::
</ContainerBox>

<ContainerBox title="基础用法">
```js
$fmtSec(99999); //[ 27, 46, 39, '27:46:39' ]
```
<ShowCode>
::: slot codes
```js
export function $fmtSec(seconds) {
  let hour =
    Math.floor(seconds / 3600) >= 10
      ? Math.floor(seconds / 3600)
      : `0${ Math.floor(seconds / 3600) }`;
  seconds -= 3600 * hour;
  let min =
    Math.floor(seconds / 60) >= 10
      ? Math.floor(seconds / 60)
      : `0${ Math.floor(seconds / 60) }`;
  seconds -= 60 * min;
  let sec = seconds >= 10 ? seconds : `0${ seconds }`;
  return [hour, min, sec, `${ hour }:${ min }:${ sec }`];
}
```
:::
</ShowCode>
</ContainerBox>