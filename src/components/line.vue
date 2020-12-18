<template>
  <div id="oneLine" />
</template>

<script>
import echarts from 'echarts'
const option = {
  // backgroundColor: '#080b30',
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'line',
      lineStyle: {
        type: 'dotted',
        color: '#5A7592'
      }
    },
    backgroundColor: '#5A7592',
    textStyle: {
      color: '#F6F7F9'
    },
    formatter: '{b}<br />{a0}:{c0}'

  },
  grid: {
    top: '20%',
    left: '15%',
    right: '5%',
    bottom: '15%'
    // containLabel: true
  },
  xAxis: [{
    type: 'category',
    axisLine: {
      show: true
    },
    splitArea: {
      color: '#f00',
      lineStyle: {
        color: '#f00'
      }
    },
    axisLabel: {
      color: '#fff'
    },
    splitLine: {
      show: false
    },
    boundaryGap: false,
    data: ['A', 'B', 'C', 'D', 'E', 'F']

  }],

  yAxis: [{
    type: 'value',
    min: 0,
    name: '操作/次',
    nameGap: 15,
    nameTextStyle: {
      color: '#DBDBDB'
    },
    color: '#DBDBDB',
    splitLine: {
      show: true,
      lineStyle: {
        color: 'rgba(18,30,61,1)'
      }
    },
    axisLine: {
      show: false
    },
    axisLabel: {
      // show: false,
      // margin: 20,
      textStyle: {
        color: '#d1e6eb',
        fontFamily: 'PingFang-SC',
        fontSize: 12

      }
    },
    axisTick: {
      show: false
    }
  }],
  series: [{
    name: '任务数',
    type: 'line',
    smooth: true, // 是否平滑
    // showAllSymbol: true,
    // symbol: 'image://./static/images/guang-circle.png',
    symbol: 'circle',
    symbolSize: 10,
    lineStyle: {
      normal: {
        color: '#FEB655'

      }
    },
    itemStyle: {
      color: '#000',
      borderColor: '#FEB655',
      borderWidth: 2
    },
    areaStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgba(254,191,0,1)'
        },
        {
          offset: 1,
          color: 'rgba(70,63,36,0.2)'
        }
        ], false)
      }
    },
    data: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02]
  }

  ]
};
export default {
  props: {
    lineOneList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  watch: {
    // lineOneList () {
    //   this.drawChart()
    // },
  },
  mounted () {
    this.drawChart()
  },
  methods: {
    drawChart () {
      // option.xAxis[0].data = []
      // option.series[0].data = []
      // let data = Object.assign([], this.lineOneList)
      // data.map(item => {
      //   option.xAxis[0].data.push(item.statisticDate)
      //   option.series[0].data.push(item.statisticData)
      // })
      this.myChart = echarts.init(document.getElementById('oneLine'))
      this.myChart.setOption(option)
      window.addEventListener(`resize`, () => {
        this.myChart.resize()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#oneLine {
  width: 100%;
  height: 100%;
}
</style>