<template>
  <div class="process">
    <div
      v-for="(item,idx) in fourList"
      :key="idx"
      class="rightBox"
    >
      <h1> {{ formatNum(item.total) }}</h1>
      <div class="InheritBottom">
        <span
          v-for="per in 80"
          :key="per"
          :class="['process',{'active':per<0.80*item.successRate+1}]"
        />
        <span>{{item.successRate}}%</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fourList: [
        { total: 4234, successRate: 0.8, growRate: null },
        { total: 222332, successRate: 0.5, growRate: null },
        { total: 3223, successRate: 0.67, growRate: null },
        { total: 71445367, successRate: 0.43, growRate: null }
      ]
    }
  },
  created () {
    this.fourList.forEach(item => {
      item.successRate = Number(parseFloat(item.successRate * 100).toFixed())
    })
  },
  methods: {
    formatNum (num = 0) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  }
}
</script>

<style lang='scss' scoped>
.process {
  .InheritBottom {
    width: 100%;
    height: 33%;
    padding-left: 10px;
    // padding-top: 5px;
    // background: red;
    .process {
      display: inline-block;
      width: 1px;
      margin-right: 1px;
      height: 12px;
      background: #203757;
      &.active {
        background: #ecb404;
      }
    }
  }
}
</style>