<template>
  <div class="header">
    <el-steps
      :active="activeStep"
      :list="list"
      finish-status="success"
      simple
      class="step"
    >
      <el-step
        v-for="(item,index) in list"
        :key="index"
      >
        <template slot="icon">
          <span>{{ index+1 }}</span>
        </template>
        <template slot="title">
          <span>{{ item }}</span>
        </template>
      </el-step>
    </el-steps>
  </div>
</template>

<script>
export default {
  name: `Step`,
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      }
    },
    activeStep: {
      type: Number,
      default: () => {
        return 0;
      }
    }
  }
};
</script>

<style lang='scss'>
.header {
  background: #ffffff;
  // border: 1px solid #ebeef5;
  padding: 20px;
  margin: 10px 0 -10px 0;
  .step {
    margin: 0 auto;
  }
}
.el-steps--simple {
  padding: 4px 8% !important;
}
// .el-steps.el-steps--horizontal {
//   margin-bottom: 20px;
//   border-bottom: 1px solid #ddd;
//   padding-bottom: 10px;
// }
// .cricle {
//   font-size: 9px !important;
//   display: inline-block;
//   width: 17px;
//   height: 17px;
//   border-radius: 50%;
//   text-align: center;
//   line-height: 12px;
//   margin-left: -27px;
//   margin-right: 27px;
//   position: relative;
//   color: #ffffff !important;
//   z-index: 1;
// }
// .is-success .cricle {
//   border-color: #60be36 !important;
// }
// .is-success .el-step__icon.is-text {
//   background: #60be36 !important;
// }
// .is-success .el-step__icon-inner.is-status.el-icon-check {
//   color: #ffffff !important;
// }
.el-step__title.is-process {
  color: #4b64ce !important;
}
.is-process .el-step__icon.is-text {
  border-color: #4b64ce !important;
  background: #4b64ce !important;
  color: #ffffff !important;
}
.is-wait .el-step__icon.is-text {
  border-color: #c4c7cf !important;
  background: #c4c7cf !important;
  color: #ffffff;
}
</style>