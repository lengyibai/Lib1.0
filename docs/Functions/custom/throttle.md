# $throttle
<ContainerBox title="介绍">
::: slot desc
不管流得再猛，也必须给我限速

使用方法与 [防抖](/Function/custom/debounce.html) 一致
:::
</ContainerBox>

<ContainerBox title="节流（延迟执行）">
<ShowCode>
::: slot codes
```js
export function $throttleDelay(fn, delay) {
  let timer;
  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        fn();
      }, delay);
    }
  };
}
```
:::
</ShowCode>
</ContainerBox>

<ContainerBox title="节流（立即执行）">
<ShowCode>
::: slot codes
```js
export function $throttleInstant(fn, delay) {
  let baseTime = 0;
  return function () {
    const currentTime = Date.now();
    if (baseTime + delay < currentTime) {
      fn.apply(this, arguments);
      baseTime = currentTime;
    }
  }
}
```
:::
</ShowCode>
</ContainerBox>

