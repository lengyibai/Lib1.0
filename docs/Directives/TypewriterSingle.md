# typewriterSingle

<ContainerBox title="介绍">
::: slot desc
比`CSS`打字机更细节一点
:::
</ContainerBox>

<ContainerBox title="使用">
::: slot desc

引入参考 [准备工作](/Directives/base/start.html#准备工作)

:::
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
::: slot desc
支持显示光标，以及打字和删除时光标不闪烁
:::
<div class="demoBox">
<Directives-TypewriterSingle-index />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="TypewriterSingle cursor" v-typewriterSingle>单行打字机</div>
</template>
<style scoped>
.TypewriterSingle {
  height: 18px;
  line-height: 18px;
  padding-right: 0.1em;
  font-size: 18px;
  border-right: 1px solid transparent;
  margin: 1em 0;
}

.cursor {
  border-right-color: currentColor;
}
</style>
```
:::
</ShowCode>

<ShowCode iskey>
::: slot codes
```js
const typewriterSingle = {
  inserted(el) {
    let lyb = el;
    let cursor_timer; //光标计时器，需要被其它函数调用，所以声明在全局作用域

    function cursor() {
      clearInterval(cursor_timer); //调用前清除光标计时器
      cursor_timer = setInterval(() => {
        lyb.classList.toggle("cursor"); //光标闪烁
      }, 500);
    }

    let say = lyb.innerHTML;
    function again() {
      lyb.innerHTML = "";
      let timer;
      let says = say; //用于删除
      let num = 0, //用于累加遍历字符串
        text = ""; //用于输出在屏幕上
      lyb.innerHTML = "";
      timer = setInterval(() => {
        clearInterval(cursor_timer); //禁止光标闪烁
        lyb.classList.add("cursor");
        text += say[num]; //遍历输出的文字
        lyb.innerHTML = text; //输出在屏幕上
        num++;

        if (num === say.length) {
          //如果文字输出完毕
          cursor(); //调用光标闪烁
          clearInterval(timer); //清除用于输出文字的计时器
          setTimeout(() => {
            //文字显示完三秒后
            clearInterval(cursor_timer); //禁止光标闪烁
            let delText_timer = setInterval(() => {
              //开始调用删除文字的计时器
              says = says.substr(0, says.length - 1); //逐个清除末尾文字
              lyb.innerHTML = says; //每次删除一个字，输出在屏幕上
              if (says.length <= 0) {
                //如果删除完毕
                clearInterval(delText_timer); //清除用于删除文字的计时器
                cursor(); //调用光标闪烁
                setTimeout(() => {
                  again(); //循环上面的过程
                }, 1000);
              }
            }, 100);
          }, 2000);
        }
      }, 100);
    }
    again();
  },
}
```
:::
</ShowCode>
</ContainerBox>