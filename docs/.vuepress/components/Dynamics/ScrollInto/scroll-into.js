//只执行一次
export function scrollOnce(obj) {
  let {
    el,
    son,
    father = document.documentElement,
    into = 0.5,
    time = 0.5,
  } = obj;
  function fn(el, son) {
    son.style.transition = `all ${time}s`;
    let a =
      father.clientHeight -
      el.clientHeight * into -
      el.getBoundingClientRect().top;
    if (a > 0) {
      son.style.transform = null;
      son.style.opacity = 1;
    }
  }
  if (el instanceof Array) {
    el.forEach((item, index) => {
      fn(item, son[index]);
    });
  } else {
    fn(el, son);
  }
}
