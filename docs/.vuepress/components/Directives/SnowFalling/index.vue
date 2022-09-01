<template>
  <div class="SnowFalling" v-snowFalling></div>
</template>
<script>
export default {
  directives: {
    snowFalling: {
      inserted(el) {
        function $random(min, max, num = 0) {
          return parseFloat((Math.random() * (max - min) + min).toFixed(num));
        }

        document.styleSheets[0].insertRule(
          `
      @keyframes LibSnowFalling {
        100% {
          transform: translateX(var(--left)) translateY(calc(100vh + 10px));
        }
      }
      `,
          1 //代表插入索引位置，一般直接 document.styleSheets[0].length
        );

        const lyb = el;
        let particle = [];

        for (let i = 0; i < document.documentElement.offsetWidth / 15; i++) {
          particle.push('<div class="particle"></div>');
        }

        function update() {
          lyb.innerHTML = "";
          lyb.innerHTML = particle.join(" "); //join转换成字符串
          const particles = lyb.querySelectorAll(".particle");
          let left, size;
          particles.forEach((item) => {
            size = $random(100, 200);
            item.style.cssText = `
              --left: 0;
              --top: 0;
              position: absolute;
              top: 0;
              left: 0;
              width: ${document.documentElement.offsetWidth / size}px;
              height: ${document.documentElement.offsetWidth / size}px;
              animation: LibSnowFalling var(--time) infinite linear;
              background-repeat: no-repeat;
              background-position: center center;
              background-size: cover;
              pointer-events: none;
              background-color: #fff;
              border-radius: 50%;
            `;
            left = $random(0, document.documentElement.offsetWidth);

            item.style.transform = `translateX(${left}px) translateY(-200%)`;
            item.style.setProperty("--left", left + "px");
            item.style.setProperty("--time", $random(3, 5, 1) + "s");
            item.style.animationDelay = $random(0, 10, 1) + "s";
          });
        }
        window.addEventListener("resize", function () {
          update();
        });
        update();
      },
    },
  },
};
</script>
<style scoped lang="less">
.SnowFalling {
  position: relative;
  width: 100%;
  height: 75vh;
  background-size: cover;
  background: url(./bg.png) no-repeat center center;
  overflow: hidden;
}
</style>
