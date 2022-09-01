# $getCountTime
<ContainerBox title="介绍">
::: slot desc
一般记录网站已运行时间和倒计时
:::
</ContainerBox>

<ContainerBox title="基础用法">
::: slot desc
如果是未来时间，将返回倒计时，如果是过去时间，则返回已过去时间

如：`2022-04-01 10:45:00`
:::
```js
setInterval(() => {
  console.log($getCountTime("2022-01-01 00:00:00"));
}, 1000);
```
<ShowCode>
::: slot codes
```js
export function $getCountTime(time = "2022-04-01 10:45:00") {
  let now = new Date(time).getTime(),
    future = new Date().getTime(),
    times =
      future - now > 0
        ? Math.floor((future - now) / 1000)
        : Math.floor((now - future) / 1000);

  const time_arr = [
    {
      y: times / 60 / 60 / 24 / 30 / 12,
    },
    {
      mon: (times / 60 / 60 / 24 / 30) % 12,
    },
    {
      d: (times / 60 / 60 / 24) % 30,
    },
    {
      h: (times / 60 / 60) % 24,
    },
    {
      min: (times / 60) % 60,
    },
    {
      s: times % 60,
    },
  ];
  let timeObj = {};
  time_arr.forEach((item) => {
    const arr = Object.entries(item)[0];
    const key = arr[0];
    const value = arr[1];
    item[key] = Math.floor(value).toString().padStart(2, "0");
    Object.assign(timeObj, item);
  });
  return timeObj;
}
```
:::
</ShowCode>
</ContainerBox>