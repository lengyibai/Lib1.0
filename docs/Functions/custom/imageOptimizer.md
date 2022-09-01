# $imageOptimizer
<ContainerBox title="介绍">
::: slot desc
超过一定大小或尺寸进行压缩
:::
</ContainerBox>

<ContainerBox title="基础用法">
::: slot desc
过一定大小或尺寸进行压缩
:::
```html
<body>
  <input type="file" id="img" />

  <!-- JS -->
  <script>
    const img = document.querySelector("#img");
    img.addEventListener("change", function () {
      $imageOptimizer({
        el: img, //上传图片的input元素
        //file:f, //file类型的文件
        width: 1000, //压缩尺寸
        ratio: 1, //压缩率
        maxsize: 1024, //超过多大进行压缩
        /* 成功回调 */
        success: (data, file, url) => {},
      });
    });
  </script>
</body>
```
<ShowCode>
::: slot codes
```js
export function $imageOptimizer(e){function t(e,t){let n=e.split(","),i=n[0].match(/:(.*?);/)[1],o=atob(n[1]),a=o.length,l=new Uint8Array(a);for(;a--;)l[a]=o.charCodeAt(a);return new File([l],t,{type:i})}function n(e){const t=new FormData;return t.append("file",e),t}const i=document.createElement("canvas");i.classList.add("imageOptimizer"),document.body.appendChild(i);const o=document.querySelector(".imageOptimizer");let a="",l="",r="",c=e.ratio||1,d=e.maxsize||1024,h=e.width||1e4;if(e.el||e.file){a=e.el&&e.el.files[0]||e.file,r=a.name;let i=new FileReader;i.readAsDataURL(a);let s=new Promise(function(e,t){i.onload=function(t){e(t)},i.onerror=function(e){t(e)}});s.then(i=>{let a=i.target.result;if(i.total/1024>d){let i=new Promise(function(e,t){let n=new Image;n.src=a,n.onload=function(){e(n)},n.onerror=function(e){t(e)}});i.then(i=>{let a=document.querySelector("canvas"),d=a.getContext("2d"),s=h/i.width;s<1?(a.width=i.width*s,a.height=i.height*s,d.drawImage(i,0,0,i.width*s,i.height*s)):(a.width=i.width,a.height=i.height,d.drawImage(i,0,0,i.width,i.height));let m=a.toDataURL("image/jpeg",c);l=m;let u=t(l,r);e.success(n(u),u,l),o.remove()},e=>{console.log(e)})}else{let i=t(a,r);e.success(n(i),i,a),o.remove()}},e=>{console.log(e)})}}
```
:::
</ShowCode>
</ContainerBox>

<ContainerBox title="未压缩">
::: slot desc
可以修改源码扩展功能一下
:::
<ShowCode>
::: slot codes
```js
export function $imageOptimizer(obj) {
  // 先判断Dom树是否存在上次创建的canvas
  const c1 = document.createElement("canvas");
  c1.classList.add("imageOptimizer");
  document.body.appendChild(c1);
  const c2 = document.querySelector(".imageOptimizer");
  let files = "";
  let Blobs = "";
  let name = "";
  let ratio = obj.ratio || 1; //压缩率
  let maxsize = obj.maxsize || 1024; //超过多大进行压缩
  let width = obj.width || 10000; //压缩尺寸
  if (obj.el || obj.file) {
    files = (obj.el && obj.el.files[0]) || obj.file;
    name = files.name;
    let reader = new FileReader();
    reader.readAsDataURL(files);
    let p1 = new Promise(function (resolve, reject) {
      reader.onload = function (e) {
        resolve(e);
      };
      reader.onerror = function (e) {
        reject(e);
      };
    });
    p1.then(
      (e) => {
        let result = e.target.result;
        // 判断图片占用大小
        if (e.total / 1024 > maxsize) {
          let p2 = new Promise(function (resolve, reject) {
            let image = new Image();
            image.src = result;
            image.onload = function () {
              resolve(image);
            };
            image.onerror = function (e) {
              reject(e);
            };
          });
          p2.then(
            (e) => {
              let canvas = document.querySelector("canvas");
              let context = canvas.getContext("2d");
              // 如果图片尺寸大于规定尺寸，则压缩尺寸
              let scale = width / e.width;
              if (scale < 1) {
                canvas.width = e.width * scale;
                canvas.height = e.height * scale;
                context.drawImage(e, 0, 0, e.width * scale, e.height * scale);
              } else {
                canvas.width = e.width;
                canvas.height = e.height;
                context.drawImage(e, 0, 0, e.width, e.height);
              }
              let dataUrl = canvas.toDataURL("image/jpeg", ratio);
              Blobs = dataUrl;
              let file = dataURLtoFile(Blobs, name);
              obj.success(formData(file), file, Blobs);
              c2.remove();
            },
            (e) => {
              console.log(e);
            },
          );
        } else {
          let file = dataURLtoFile(result, name);
          obj.success(formData(file), file, result);
          c2.remove();
        }
      },
      (e) => {
        console.log(e);
      },
    );
  }

  function dataURLtoFile(dataurl, filename) {
    let arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {
      type: mime,
    });
  }

  function formData(file) {
    const data = new FormData();
    data.append("file", file);
    return data;
  }
}
```
:::
</ShowCode>
</ContainerBox>

<ContainerBox title="Params">
::: slot desc
| 对象属性     | 说明                                                                                                                                                     | 类型              | 是否必填 | 默认值   |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- | -------- | -------- |
| el \|\| file | `input`表单或`file`类型的文件                                                                                                                            | Element \|\| File | 二选一   | -        |
| width        | 压缩的宽度，超过则压缩                                                                                                                                   | Number            | 否       | 自身宽度 |
| ratio        | 压缩率，0<`ratio`<=1                                                                                                                                     | Number            | 否       | 1        |
| maxsize      | 文件大小超过多大进行压缩，单位`kb`                                                                                                                       | Number            | 否       | 1024     |
| success      | 压缩成功回调<br />回调参数：<br />参数 1：可直接传给后端的表单对象<br />参数 2：`file`类型<br />参数 3：base64，可放置在`a`标签上下载以及`img`标签上预览 | Function          | 是       | -        |
:::
</ContainerBox>
