<template>
  <div class="mapC">
    <h3 class="title">{{ msg }}</h3>
    <div class="amap-wrapper">
      <el-amap class="amap-box" :vid="'amap-vue'"></el-amap>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "vue-amap向你问好！"
    };
  }
};
</script>

<style lang="scss" scoped>
.mapC {
  text-align: center;
  width: 100%;
  height: 100%;
  .amap-wrapper {
    width: 100%;
    height: calc(100% - 50px);
  }
}
</style>

