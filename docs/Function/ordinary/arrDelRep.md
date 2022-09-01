# $arrDelRep
<ContainerBox title="介绍">
::: slot desc
去掉数组内重复的对象、数组、字符串
:::
</ContainerBox>

<ContainerBox title="基础用法">
```js
const arr = [
  "a",
  "a",
  1,
  1,
  ["a", 1],
  ["a", 1],
  { a: 1 },
  { a: 1 },
  true,
  true,
];
console.log($arrDelRep(arr)); //[ "a", 1, [ "a", 1 ], { "a": 1 }, true ]
```
<ShowCode>
::: slot codes
```js
export function $arrDelRep(arr) {
  let obj = {};
  return arr.filter((ele) => {
    if (!obj[ele]) {
      obj[ele] = true;
      return true;
    }
  });
}
```
:::
</ShowCode>
</ContainerBox>