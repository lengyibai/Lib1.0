<template>
  <div class="LibSelectAddress">
    <Dynamics-SelectAddress-index
      v-model="chinese"
      :code="false"
    />
    <h1>{{ chinese }}</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      chinese: ["四川省", "自贡市", "自流井区"],
    };
  },
};
</script>
