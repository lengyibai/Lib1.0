<template>
  <div class="LibDragSort">
    <div class="transition-group" is="transition-group">
      <div
        class="box"
        :class="{ active: fromIndex === index }"
        @dragstart="dragstart(index)"
        @dragover="dragover"
        @dragenter="dragenter(index)"
        @dragend="dragend"
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
  name: "LibDragSortMove",
  props: {
    data: {
      type: Array,
      default() {
        return [];
      },
    },
    id: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      arr: [],
      fromIndex: null,
      debounceDelay: null,
      enterIndex: null,
      isUpdate: false,
    };
  },
  created() {
    this.arr = [...this.data];
    this.debounceDelay = this.$debounceDelay(
      function () {
        if (this.fromIndex === this.enterIndex) return;
        this.drop(this.enterIndex);
      }.bind(this),
      100
    );
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

    dragenter(index) {
      if (this.fromIndex === null) return;
      this.enterIndex = index;
      this.debounceDelay();
    },

    dragover(e) {
      e.preventDefault();
    },

    drop(index) {
      this.exchange(this.arr, this.fromIndex, index);
      this.fromIndex = index;
      this.isUpdate = true;
    },

    dragend() {
      setTimeout(() => {
        if (this.isUpdate) {
          this.$emit("sort-data", this.arr);
          this.isUpdate = false;
        }
        this.fromIndex = null;
        this.enterIndex = null;
      }, 100);
    },

    $debounceDelay(fn, delay) {
      return function (args) {
        let that = this;
        let _args = args;
        clearTimeout(fn.id);
        fn.id = setTimeout(function () {
          fn.call(that, _args);
        }, delay);
      };
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
      transition: all 0.1s;
    }
  }
}
.active {
  opacity: 0;
}
</style>
