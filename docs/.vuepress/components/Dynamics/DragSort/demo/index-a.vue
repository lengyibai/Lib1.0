<template>
  <div class="demo">
    <component
      :is="
        toggle
          ? 'Dynamics-DragSort-DragSortDown'
          : 'Dynamics-DragSort-DragSortMove'
      "
      :data="imgs"
      @sort-data="sort"
      id="name"
    >
      <template v-slot="{ item }">
        <div class="box">
          <img :src="item.src" alt="" />
        </div>
      </template>
    </component>
    <h1>{{ arr || ["A", "B", "C", "D", "E"] }}</h1>
    <button @click="toggle = !toggle">
      当前组件：{{ toggle ? "LibDragSortDown" : "LibDragSortMove" }}，点击切换
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [],
      imgs: [
        {
          name: "A",
          src: require("./img/a.png"),
        },
        {
          name: "B",
          src: require("./img/b.png"),
        },
        {
          name: "C",
          src: require("./img/c.png"),
        },
        {
          name: "D",
          src: require("./img/d.png"),
        },
        {
          name: "E",
          src: require("./img/e.png"),
        },
      ],
      draggable: false,
      toggle: false,
    };
  },
  created() {
    this.arr = this.data;
  },
  methods: {
    sort(data) {
      this.arr = data.map((item) => {
        return item.name;
      });
    },
  },
};
</script>
<style scoped lang="less">
.demo {
  width: 100%;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 3vw;
    text-align: center;
    margin-bottom: 0 !important;
  }
  .box {
    width: 10vw;
    height: 10vw;
    margin: 0.5vw;
    img {
      width: 100%;
      height: 100%;
      filter: drop-shadow(rgba(0, 0, 0, 0.25) 0px 2px 4px);
    }
  }
}
</style>
