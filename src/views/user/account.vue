<template>
  <div class="one-bedroom">
    <!--这里一居室-->
    <one-bedroom>
      <!--将家具放到房间里面，组件内部就是上面提供的默认插槽的空间-->
      <span>先放一个小床，反正没有女朋友</span>
      <span>再放一个电脑桌，在家还要加班写bug</span>
    </one-bedroom>
  </div>
</template>
<script>
import OneBedroom from "./slot";
export default {
  components: {
    OneBedroom
  }
};
</script>
<style lang="scss" scoped>
.one-bedroom {
  background: #ffffff;
  padding: 20px;
  box-sizing: border-box;
}
</style>