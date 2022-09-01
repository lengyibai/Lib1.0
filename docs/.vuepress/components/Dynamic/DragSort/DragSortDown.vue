<template>
  <div class="LibDragSort">
    <div class="transition-group" is="transition-group">
      <div
        class="box"
        :class="{ active: currentIndex === index }"
        @dragstart="dragstart(index)"
        @dragover="dragover($event, index)"
        @drop="drop(index)"
        @dragleave="dragleave"
        v-for="(item, index) in arr"
        :key="item[id]"
      >
        <slot :item="item" :index="index"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default() {
        return [];
      },
    },
    id: {
      type: String,
      default: "id",
    },
  },
  name: "LibDragSortDown",
  data() {
    return {
      arr: [],
      fromIndex: null,
      currentIndex: null,
    };
  },
  created() {
    this.arr = [...this.data];
  },
  methods: {
    exchange(arr, index, target) {
      if (index > target) {
        arr.splice(target, 0, arr[index]);
        arr.splice(index + 1, 1);
      } else {
        arr.splice(target + 1, 0, arr[index]);
        arr.splice(index, 1);
      }
    },

    dragstart(index) {
      this.fromIndex = index;
    },

    dragover(e, index) {
      if (this.fromIndex === null) return;
      e.preventDefault();
      this.currentIndex = index;
    },

    drop(index) {
      this.currentIndex = null;
      this.exchange(this.arr, this.fromIndex, index);
      this.$emit("sort-data", this.arr);
      this.fromIndex = null;
    },

    dragleave() {
      this.currentIndex = null;
    },
  },
};
</script>
<style scoped lang="less">
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
.LibDragSort {
  .flex();
  width: 100%;
  height: 100%;
  .transition-group {
    .flex();
    flex-wrap: wrap;
    .box {
      transition: all 0.5s;
    }
  }
}
.active {
  transform: scale(1.25);
  transition: all 0.1s !important;
  opacity: 0.25;
}
</style>
