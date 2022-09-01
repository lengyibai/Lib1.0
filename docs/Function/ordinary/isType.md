# $isArray
<ContainerBox title="介绍">
::: slot desc
判断是否为指定类型的数据
:::
</ContainerBox>

<ContainerBox title="基础用法">
::: slot desc
返回`Boolean`值
:::
```js
$isArray([]), //true
$isBoolean(false), //true
$isObject({}), //true
$isString(""), //true
$isFunction(() => {}) //true
```
<ShowCode>
::: slot codes
```js
export function $isArray(type) {
  return Object.prototype.toString.call(type) === "[object Array]";
}
export function $isBoolean(type) {
  return Object.prototype.toString.call(type) === "[object Boolean]";
}
export function $isObject(type) {
  return Object.prototype.toString.call(type) === "[object Object]";
}
export function $isString(type) {
  return Object.prototype.toString.call(type) === "[object String]";
}
export function $isFunction(type) {
  return Object.prototype.toString.call(type) === "[object Function]";
}
```
:::
</ShowCode>
</ContainerBox>