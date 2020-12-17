<template>
  <div class="step">
    <Step
      :active-step="activeStep"
      :list="List"
    />
    <div class="operate-btn-group">
      <el-button
        type="primary"
        size="medium"
        plain
        @click="prev"
      >
        上一步
      </el-button>
      <el-button
        type="primary"
        size="medium"
        @click="next"
      >
        下一步
      </el-button>
    </div>
  </div>
</template>

<script>
import Step from '@/components/step.vue';
export default {
  components: {
    Step
  },
  data () {
    return {
      activeStep: 0,
      List: [
        `guideAccount`,
        'setBootContent',
        'setBootPolicy',
        'previewBootTask'
      ],
    }
  },
  methods: {
    next () {
      if (this.activeStep < this.List.length) {
        this.activeStep++;
      }
    },
    prev () {
      if (this.activeStep > 0) {
        this.activeStep--;
      }

    },
  }
}
</script>

<style lang="scss" scoped>
.step {
  .operate-btn-group {
    float: right;
    margin-top: 10px;
    margin-right: 20px;
  }
}
</style>