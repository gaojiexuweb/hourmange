<template>
  <div>
    <div class="echarts">
      <div class="echartDIv">
        <LineCom />
      </div>
      <div class="echartDIv">
        <LinesCom :linesList="linesList" />
      </div>
      <div class="echartDIv">
        <h1>动态拼接类型</h1>
        <Randar :randar-data="randarData" />
      </div>
    </div>
  </div>

</template>

<script>
import LineCom from '@/components/line.vue';
import LinesCom from '@/components/lines.vue';
import Randar from '@/components/randar.vue';
export default {
  components: {
    LineCom,
    LinesCom,
    Randar
  },
  data () {
    return {
      linesList: [
        { statisticDate: "2020-11-18", level1Acct: 13, level2Acct: 2, level3Acct: 2 },
        { statisticDate: "2020-11-19", level1Acct: 13, level2Acct: 2, level3Acct: 2 },
        { statisticDate: "2020-11-20", level1Acct: 13, level2Acct: 2, level3Acct: 2 },
        { statisticDate: "2020-11-21", level1Acct: 13, level2Acct: 2, level3Acct: 2 },
        { statisticDate: "2020-11-22", level1Acct: 13, level2Acct: 2, level3Acct: 2 },
        { statisticDate: "2020-11-23", level1Acct: 13, level2Acct: 2, level3Acct: 2 },
        { statisticDate: "2020-11-24", level1Acct: 22, level2Acct: 2, level3Acct: 2 },
        { statisticDate: "2020-11-25", level1Acct: 16, level2Acct: 1, level3Acct: 2 },
        { statisticDate: "2020-11-26", level1Acct: 16, level2Acct: 1, level3Acct: 2 },
        { statisticDate: "2020-11-27", level1Acct: 0, level2Acct: 0, level3Acct: 0 },
        { statisticDate: "2020-11-28", level1Acct: 0, level2Acct: 0, level3Acct: 0 },
        { statisticDate: "2020-11-29", level1Acct: 0, level2Acct: 0, level3Acct: 0 },
        { statisticDate: "2020-11-30", level1Acct: 16, level2Acct: 1, level3Acct: 2 },
        { statisticDate: "2020-12-01", level1Acct: 18, level2Acct: 1, level3Acct: 2 },
        { statisticDate: "2020-12-02", level1Acct: 18, level2Acct: 1, level3Acct: 2 },
        { statisticDate: "2020-12-03", level1Acct: 0, level2Acct: 0, level3Acct: 0 },
        { statisticDate: "2020-12-04", level1Acct: 22, level2Acct: 1, level3Acct: 2 },
        { statisticDate: "2020-12-05", level1Acct: 22, level2Acct: 1, level3Acct: 2 },
        { statisticDate: "2020-12-06", level1Acct: 22, level2Acct: 1, level3Acct: 2 },
        { statisticDate: "2020-12-07", level1Acct: 22, level2Acct: 1, level3Acct: 2 },
        { statisticDate: "2020-12-08", level1Acct: 22, level2Acct: 1, level3Acct: 2 },
        { statisticDate: "2020-12-09", level1Acct: 22, level2Acct: 1, level3Acct: 2 },
        { statisticDate: "2020-12-10", level1Acct: 22, level2Acct: 1, level3Acct: 2 },
        { statisticDate: "2020-12-11", level1Acct: 22, level2Acct: 1, level3Acct: 2 },
        { statisticDate: "2020-12-12", level1Acct: 22, level2Acct: 1, level3Acct: 2 },
        { statisticDate: "2020-12-13", level1Acct: 22, level2Acct: 1, level3Acct: 2 },
        { statisticDate: "2020-12-14", level1Acct: 23, level2Acct: 1, level3Acct: 2 },
        { statisticDate: "2020-12-15", level1Acct: 19, level2Acct: 1, level3Acct: 2 },
        { statisticDate: "2020-12-16", level1Acct: 19, level2Acct: 1, level3Acct: 2 },
        { statisticDate: "2020-12-17", level1Acct: 19, level2Acct: 1, level3Acct: 2 },
        { statisticDate: "2020-12-18", level1Acct: 19, level2Acct: 1, level3Acct: 2 }
      ],
      randarData: [
        { appCode: null, iconUrl: null, type: "体育", total: 10 },
        { appCode: null, iconUrl: null, type: "旅游", total: 6 },
        { appCode: null, iconUrl: null, type: "汽车", total: 3 },
        { appCode: null, iconUrl: null, type: "科技", total: 2 },
        { appCode: null, iconUrl: null, type: "科普", total: 3 }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.echarts {
  width: 100%;
  height: 100%;
  background: url("../../assets/background.png");
  background-size: 100% 100%;
  overflow: scroll;
  color: #ffffff;
  .echartDIv {
    width: 800px;
    height: 300px;
  }
}
</style>