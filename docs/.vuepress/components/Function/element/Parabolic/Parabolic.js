export default class {
  move;
  middle;
  right;
  runing; //是否处于运动中
  speed;
  constructor(move, middle, right, speed = 20) {
    // 通过三个点的坐标获取二元一次方程系数
    this.move = move;
    this.middle = middle;
    this.right = right;
    this.speed = speed;
  }

  getSolve(arr1, arr2, arr3) {
    let d = arr1[0];
    let e = arr1[1];
    let f = arr2[0];
    let g = arr2[1];
    let h = arr3[0];
    let i = arr3[1];

    let a = (((g - i) * (f - d)) / (f - h) - (g - e)) / (((f * f - h * h) * (f - d)) / (f - h) - (f * f - d * d));
    let b =
      (((g - i) * (f * f - d * d)) / (f * f - h * h) - (g - e)) /
      (((f - h) * (f * f - d * d)) / (f * f - h * h) - (f - d));
    let c =
      (((g * h - f * i) * (d * d * f - f * f * d)) / (f * f * h - h * h * f) - (f * e - d * g)) /
      (((h - f) * (d * d * f - f * f * d)) / (f * f * h - h * h * f) - (f - d));
    let all = [a, b, c];

    return all;
  }

  run() {
    return new Promise((resolve, reject) => {
      if (this.runing) {
        reject();
        return;
      }
      this.runing = true;
      const move = this.move;
      const middle = this.middle;
      const right = this.right;
      let arr1 = [move.getBoundingClientRect().x, -move.getBoundingClientRect().y];
      let arr2 = [middle.getBoundingClientRect().x, -middle.getBoundingClientRect().y];
      let arr3 = [right.getBoundingClientRect().x, -right.getBoundingClientRect().y];

      const EYC = this.getSolve(arr1, arr2, arr3);
      //开始定时器前  首先停止原来的定时器
      (function fn() {
        let newLeft = this.move.offsetLeft + this.speed;
        let newTop = EYC[0] * newLeft * newLeft + EYC[1] * newLeft + EYC[2];
        move.style.left = newLeft + "px";
        move.style.top = -newTop + "px";
        if (newLeft >= arr3[0] && newTop <= arr3[1]) {
          this.runing = false;
          move.style.left = arr1[0] + "px";
          move.style.top = -arr1 + "px";
          resolve();
          return;
        }
        requestAnimationFrame(fn.bind(this));
      }.call(this));
    });
  }
}
