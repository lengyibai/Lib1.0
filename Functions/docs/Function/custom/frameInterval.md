# $frameInterval
<ContainerBox title="介绍">
::: slot desc
比`setInterval`拥有更好的性能，唯一不足的是无法清除，以及频率比`setInterval`快百来毫秒，一般用于不需要清除的动画和不在意时间精度功能，如粒子效果
:::
</ContainerBox>

<ContainerBox title="基础用法">
::: slot desc
参数与`setInterval`的前两个参数的功能一样
:::
```js
const box = document.querySelector(".box");
let deg = 0;
$frameInterval(() => {
  deg++;
  console.log(deg);
  box.style.transform = `rotate(${deg}deg)`;
});
```
<ShowCode>
::: slot codes
```js
export function $frameInterval(fn, fre = 0) {
  let time = 0;
  f();

  function f() {
    time += 10;
    if (time > fre) {
      fn();
      time = 0;
    }
    requestAnimationFrame(f);
  }
}
```
:::
</ShowCode>
</ContainerBox>