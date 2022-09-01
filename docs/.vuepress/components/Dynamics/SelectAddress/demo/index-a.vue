<template>
  <div class="LibSelectAddress">
    <Dynamics-SelectAddress-index v-model="code" />
    <h1>{{ code }}</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      code: ["510000", "510100", "510107"],
    };
  },
};
</script>
