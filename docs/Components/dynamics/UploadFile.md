# UploadFile

<ContainerBox title="介绍">
::: slot desc
这是一个支持：

- 显示文件名

- 文件占用大小

- 匹配文件对应图标

- 限制文件大小

- 限制文件格式

- 单文件和多文件上传

- 排队上传

- 文件拖拽至选择框处上传
  :::
  </ContainerBox>

<ContainerBox title="下载并引入">
::: slot desc

[下载组件包](https://gitee.com/lengyibai/component-package/raw/master/LibUploadFile.zip)

引入参考 [引入组件](/Components/Base/start.html#引入组件)

:::
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
::: slot desc
无限制，打开控制台可查看回调参数打印

由于使用的`Element UI`的上传接口，大部分图片上传会失败，建议下载作者提供的测试图片进行此页面的上传测试：<a href="/cat.png" download="cat.png" target="_blank">点击下载</a>
:::

<div class="demoBox">
<Dynamics-UploadFile-demo-index-a />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="demo">
    <Dynamics-UploadFile-index
      id="a"
      :files="files"
      @cancel="cancel"
      @del="del"
      @fail="fail"
      @progress="progress"
      @success="success"
      url="https://jsonplaceholder.typicode.com/posts/"
    />
    <p v-for="(item, index) in files" :key="index">
      {{ item }}
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      files: [],
    };
  },
  methods: {
    success(a) {
      console.warn("上传成功：", a);
    },
    del(a) {
      console.warn("删除文件：", a);
    },
    cancel(a) {
      console.warn("取消上传");
    },
    fail(a) {
      console.error("上传失败");
    },
    progress(a) {
      console.warn("上传进度：", a);
    },
  },
};
</script>
<style scoped>
.demo {
  width: 100%;
}
</style>

````
:::
</ShowCode>
</ContainerBox>

<ContainerBox title="限制">
::: slot desc
限制上传一个文件，只能上传`png`、`jpg`格式的文件，且大小不能超过`1.25MB`
:::

<div class="demoBox">
<Dynamics-UploadFile-demo-index-b />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="demo">
    <LibUploadFile
      url="https://jsonplaceholder.typicode.com/posts/"
      :multiple="false"
      :size="1.25"
      :suffix="['png', 'jpg']"
      :files="files"
    />
    <p v-for="(item, index) in files" :key="index">
      {{ item }}
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      files: [],
    };
  },
};
</script>
<style scoped>
.demo {
  width: 100%;
}
</style>
````

:::
</ShowCode>
</ContainerBox>

<ContainerBox title="只读">
::: slot desc
不可编辑
:::

<div class="demoBox">
<Dynamics-UploadFile-demo-index-c />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="demo">
    <LibUploadFile
      :files="files"
      disabled
      v-if="isShow || files.length"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      files: [],
    };
  },
  mounted() {
    /* 模拟异步请求图片进行预览 */
    setTimeout(() => {
      this.files = [
        {
          fileName: "图片1",
          src: "http://lengyibai.gitee.io/img-bed/img/lyb.png",
        },
        {
          fileName: "图片2",
          src: "http://lengyibai.gitee.io/img-bed/img/lyb.png",
        },
        {
          fileName: "图片3",
          src: "http://lengyibai.gitee.io/img-bed/img/lyb.png",
        },
      ];
    }, 1000);
  },
};
</script>
<style scoped>
.demo {
  width: 100%;
}
</style>
```
:::
</ShowCode>
</ContainerBox>

<ContainerBox title="可编辑">
::: slot desc
用于在重新编辑数据的情况
:::

<div class="demoBox">
<Dynamics-UploadFile-demo-index-d />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="demo">
    <LibUploadFile
      :files="files"
      id="d"
      url="https://jsonplaceholder.typicode.com/posts/"
      v-if="isShow || files.length"
    />
    <p v-for="(item, index) in files" :key="index">
      {{ item }}
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      files: [],
      isShow: false,
    };
  },
  mounted() {
    /* 模拟异步请求图片，isShow 是为了避免无图片导致隐藏，无法添加图片 */
    setTimeout(() => {
      this.files = [
        {
          fileName: "图片1",
          src: "http://lengyibai.gitee.io/img-bed/img/lyb.png",
        },
        {
          fileName: "图片2",
          src: "http://lengyibai.gitee.io/img-bed/img/lyb.png",
        },
        {
          fileName: "图片3",
          src: "http://lengyibai.gitee.io/img-bed/img/lyb.png",
        },
      ];
      this.isShow = true; //请求成功后赋值
    }, 1000);
  },
};
</script>
<style scoped>
.demo {
  width: 100%;
}
</style>

```
:::
</ShowCode>
</ContainerBox>

## API

<ContainerBox title="Props">
::: slot desc

| 参数     | 说明                                                         | 类型    | 默认值 |
| -------- | ------------------------------------------------------------ | ------- | ------ |
| id       | 当同一页面存在多个文件上传组件，需要使用`id`进行标识         | String  | -      |
| files    | 文件列表<br />注：文件删除和增加，都会直接修改原数组，可在源码内查找`this.virtual_files.push`，修改期望的返回格式，默认为`{fileName:'',src:''}` | Array   | -      |
| url      | 上传地址                                                     | String  | -      |
| headers  | 上传文件的头部信息，例如`{ token:localStorage.getItem("token") }` | Object  | -      |
| multiple | 是否开启多文件上传                                           | Boolean | true   |
| size     | 限制文件大小，单位`MB`                                       | Number  | 无限制 |
| suffix   | 限制文件格式，将可上传的文件后缀名(去掉`.`)存入数组          | Array   | 无限制 |
| readOnly | 是否只读                                                     | Boolean | false  |

:::
</ContainerBox>

<ContainerBox title="Events">
::: slot desc

| 事件名   | 说明               | 回调参数                 |
| -------- | ------------------ | ------------------------ |
| progress | 上传进度           | 1-100的进度              |
| success  | 上传成功后回调     | 后端返回值，包含状态码等 |
| del      | 删除触发           | 删除的索引号             |
| cancel   | 上传过程中删除触发 | -                        |
| fail     | 上传失败触发       | -                        |

:::
</ContainerBox>
```
