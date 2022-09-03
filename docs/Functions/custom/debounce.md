# $debounce

<ContainerBox title="介绍">
::: slot desc
不管抖得再快，也只会触发立即执行或者延迟执行的一次
:::
</ContainerBox>

<ContainerBox title="防抖（延迟执行）">
<ShowCode>
::: slot codes
```js
export function $debounceDelay(fn, delay) {
  return function (args) {
    let that = this;
    let _args = args;
    clearTimeout(fn.id);
    fn.id = setTimeout(function () {
      fn.call(that, _args);
    }, delay);
  };
}
```
:::
</ShowCode>
</ContainerBox>

<ContainerBox title="防抖（立即执行）">
<ShowCode>
::: slot codes
```js
export function $debounceInstant(fn, delay) {
  let timer;
  return function () {
    let context = this;
    let args = arguments;
    if (timer) clearTimeout(timer);
    let callNow = !timer;
    timer = setTimeout(() => {
      timer = null;
    }, delay);
    if (callNow) fn.apply(context, args);
  };
}
```
:::
</ShowCode>
</ContainerBox>

<ContainerBox title="使用方法">
::: slot desc
直接调用
:::
```js
setInterval(
  $debounce(() => {
    console.log(666);
  }, 1000),
  100,
);
```
</ContainerBox>

<ContainerBox title="使用方法">
::: slot desc
在函数内使用
:::
```js
const lib = $debounce(fn, 1000);
setInterval(() => {
  lib();
}, 100);
```
</ContainerBox>

<ContainerBox title="使用方法">
::: slot desc
在`Vue`内使用
:::
```js
export default {
  data() {
    return {
      lib: null,
    };
  },
  created() {
    lib = $throttle(function () {}.bind(this), 250);
  },
  mounted() {
    setInterval(() => {
      lib();
    }, 100);
  },
};
```
</ContainerBox>

<ContainerBox title="Params">
::: slot desc

| 参数  | 说明     | 类型     |
| ----- | -------- | -------- |
| fn    | 回调函数 | Function |
| delay | 时间     | Number   |

:::
</ContainerBox>