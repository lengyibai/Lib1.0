<template>
  <div class="demoFull flex">
    <Dynamics-ValidationCountdown-index @change="statusChange" :time="3">
      <template v-slot="{ text,  disabled }">
        <button
          class="btn"
          :disabled="disabled"
          :style="{ cursor: disabled ? 'not-allowed' : 'pointer' }"
        >
          {{ text }}
        </button>
      </template>
    </Dynamics-ValidationCountdown-index>
  </div>
</template>
<script>
export default {
  methods: {
    statusChange(status) {
      alert(status);
    },
  },
};
</script>
<style scoped>
button {
  background-color: transparent;
  font-size: 2vw;
  padding: 1em;
}
</style>
