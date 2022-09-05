function removeEmptyField(data, excludes = ["", null, undefined]) {
  let newObj = {};
  if (typeof data === "string") {
    data = JSON.parse(data);
  }
  if (data instanceof Array) {
    newObj = [];
  }
  if (data instanceof Object) {
    for (const attr in data) {
      if (!excludes.includes(data[attr])) {
        if (data[attr] instanceof Object) {
          // 空数组或空对象不加入新对象(去掉[],{})
          if (JSON.stringify(data[attr]) === "{}" || JSON.stringify(data[attr]) === "[]") {
            continue;
          }
          // 属性值为对象,则递归执行去除方法
          newObj[attr] = removeEmptyField(data[attr]);
        } else if (
          typeof data[attr] === "string" &&
          ((data[attr].indexOf("{") > -1 && data[attr].indexOf("}") > -1) ||
            (data[attr].indexOf("[") > -1 && data[attr].indexOf("]") > -1))
        ) {
          // 属性值为JSON时
          try {
            const attrObj = JSON.parse(data[attr]);
            if (attrObj instanceof Object) {
              newObj[attr] = removeEmptyField(attrObj);
            }
          } catch (e) {
            newObj[attr] = data[attr];
          }
        } else {
          newObj[attr] = data[attr];
        }
      }
    }
  }
  return newObj;
}

const testObj = [
  {
    a: "",
    b: 123,
    c: null,
    d: undefined,
  },
  {
    a: "",
    b: 123,
    c: null,
    d: undefined,
    e: [
      {
        a: "",
        b: 123,
        c: null,
        d: undefined,
      },
      {
        e: [],
        f: [1, 2, 3, "", null],
        g: {},
        h: { x: 1, y: "", z: null },
      },
    ],
    f: [1, 2, 3, "", null],
    g: {},
    h: { x: 1, y: "", z: null },
  },
];

console.log(removeEmptyField(testObj));


