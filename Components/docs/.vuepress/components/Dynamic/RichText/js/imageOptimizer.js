// 图片压缩
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
