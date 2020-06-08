<template>
  <div class="about">
    <h1>支付</h1>
    <h1>{{food}}</h1>
  </div>
</template>
<script>
export default {
  name: "Payment",
  props: {
    food: {
      type: String,
      default: "apple"
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
</style>


