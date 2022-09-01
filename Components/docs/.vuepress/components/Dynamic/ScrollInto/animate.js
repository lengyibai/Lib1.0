export default {
  translate1(el) {
    el.style.transform = `translateY(-100%)`;
  },
  translate2(el) {
    el.style.transform = "translateY(100%)";
  },
  translate3(el) {
    el.style.transform = "translateX(-200%)";
  },
  translate4(el) {
    el.style.transform = "translateX(200%)";
  },
  rotate1(el) {
    el.style.transform = "rotateX(180deg)";
  },
  rotate2(el) {
    el.style.transform = "rotateY(-180deg)";
  },
  scale1(el) {
    el.style.transform = "scale(0.1)";
  },
  scale2(el) {
    el.style.transform = "scale(2)";
  },
  scale3(el) {
    el.style.transform = "scale3d(2,1,1)";
  },
  mixedT1(el) {
    el.style.transform = "translateX(-200%) translateY(100%)";
  },
  mixedT2(el) {
    el.style.transform = "translateX(-200%) translateY(-100%)";
  },
  mixedT3(el) {
    el.style.transform = "translateX(200%) translateY(-100%)";
  },
  mixedT4(el) {
    el.style.transform = "translateX(200%) translateY(100%)";
  },
  mixedTR1(el) {
    el.style.transform = "translateY(-100%) rotateX(180deg)";
  },
  mixedTR2(el) {
    el.style.transform = "translateY(100%) rotateX(-180deg)";
  },
  mixedTR3(el) {
    el.style.transform = "translateX(-200%) rotateY(180deg)";
  },
  mixedTR4(el) {
    el.style.transform = "translateX(200%) rotateY(-180deg)";
  },
  mixedTR5(el) {
    el.style.transform = "translateX(-200%) rotateZ(-180deg)";
  },
  mixedTR6(el) {
    el.style.transform = "translateX(200%) rotateZ(180deg)";
  },
  mixedTS1(el) {
    el.style.transform = "translateX(-200%) scale(0.1)";
  },
  mixedTS2(el) {
    el.style.transform = "translateX(200%) scale(0.1)";
  },
  mixedTS3(el) {
    el.style.transform = "translateX(200%) scale(2)";
  },
  mixedTS4(el) {
    el.style.transform = "translateX(-200%) scale(2)";
  },
  mixedTS5(el) {
    el.style.transform = "translateY(-100%) scale(2)";
  },
  mixedTS6(el) {
    el.style.transform = "translateY(100%) scale(0.1)";
  },
  mixedTS7(el) {
    el.style.transform = "translateY(100%) scale(2)";
  },
  mixedRS1(el) {
    el.style.transform = "rotateZ(180deg) scale(0.1)";
  },
  mixedRS2(el) {
    el.style.transform = "rotateZ(-180deg) scale(2)";
  },
  opacity(el) {
    el.style.opacity = 0;
  },
};
