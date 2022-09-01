# $noFull
<ContainerBox title="介绍">
::: slot desc
点击指定按钮或指定条件下全屏显示

只能通过事件触发，否则无效
:::
</ContainerBox>

<ContainerBox title="基础用法">
```js
$full(); //开启全屏
```
<ShowCode>
::: slot codes
```js
export function $isFull() {
  const docElm = document.documentElement;
  if (docElm.requestFullscreen) {
    docElm.requestFullscreen();
  } else if (docElm.moRequestFullScreen) {
    docElm.mozRequestFullScreen();
  } else if (docElm.webkitRequestFullScreen) {
    docElm.webkitRequestFullScreen();
  } else if (docElm.msRequestFullscreen) {
    docElm.msRequestFullscreen();
  }
}
```
:::
</ShowCode>
</ContainerBox>

<ContainerBox title="基础用法">
```js
$exitFull(); //退出全屏
```
<ShowCode>
::: slot codes
```js
export function $exitFull() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}
```
:::
</ShowCode>
</ContainerBox>