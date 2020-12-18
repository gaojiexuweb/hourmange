<template>
  <div id="lines" />
</template>

<script>
import echarts from 'echarts'
const option = {
  // backgroundColor: '#080b30',
  legend: {
    right: 0,
    top: 5,
    data: [
      {
        name: '新号',
        icon: `image://` + require(`@/assets/icon-1.svg`),
        textStyle: {
          color: '#fff'
        }
      },
      {
        name: '成长号',
        icon: `image://` + require(`@/assets/icon-2.svg`),
        textStyle: {
          color: '#fff'
        }
      },
      {
        name: '成熟号',
        icon: `image://` + require(`@/assets/icon-3.svg`),
        textStyle: {
          color: '#fff'
        }
      }
    ]
  },
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
    formatter: function (params) {
      if (params[0] && !params[1]) {
        return `${params[0].axisValue}<br />
        ${params[0].seriesName}:${params[0].value}<br />`
      } else if (params[0] && params[1] && !params[2]) {
        return `${params[0].axisValue}<br />
        ${params[0].seriesName}:${params[0].value}<br />
         ${params[1].seriesName}:${params[1].value}`
      } else {
        return `${params[0].axisValue}<br />
        ${params[0].seriesName}:${params[0].value}<br />
        ${params[1].seriesName}:${params[1].value}<br />
         ${params[2].seriesName}:${params[2].value}`
      }
    }
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
    data: []

  }],

  yAxis: [{
    type: 'value',
    min: 0,
    name: '账号数',
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
    name: '新号',
    type: 'line',
    // smooth: true, //是否平滑
    showAllSymbol: false,
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

    data: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02]
  },
  {
    name: '成长号',
    type: 'line',
    // smooth: true, //是否平滑
    showAllSymbol: false,
    // symbol: 'image://./static/images/guang-circle.png',
    symbol: 'circle',
    symbolSize: 10,
    lineStyle: {
      normal: {
        color: '#A7DB8A'

      }
    },
    itemStyle: {
      color: '#000',
      borderColor: '#A7DB8A',
      borderWidth: 3
    },

    data: [281.55, 398.35, 214.02, 179.55, 289.57, 356.14]
  },
  {
    name: '成熟号',
    type: 'line',
    // smooth: true, //是否平滑
    showAllSymbol: false,
    // symbol: 'image://./static/images/guang-circle.png',
    symbol: 'circle',
    symbolSize: 10,
    lineStyle: {
      normal: {
        color: '#8DBDFE'

      }
    },
    itemStyle: {
      color: '#000',
      borderColor: '#8DBDFE',
      borderWidth: 3
    },

    data: [21.55, 38.35, 21.02, 17.55, 29.57, 56.14]
  }
  ]
};
export default {
  props: {
    linesList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  watch: {
    linesList () {
      this.drawChart()
    }
  },
  mounted () {
    this.drawChart()
  },
  beforeDestroy () {
    if (this.myChart) {
      this.myChart.dispose()
    }
  },
  methods: {
    drawChart () {
      // console.log(208, this.linesList)
      option.series[0].data = []
      option.series[1].data = []
      option.series[2].data = []
      option.xAxis[0].data = []
      let data = Object.assign([], this.linesList)
      data.map(item => {
        option.xAxis[0].data.push(item.statisticDate)
        option.series[0].data.push(item.level1Acct)
        option.series[1].data.push(item.level2Acct)
        option.series[2].data.push(item.level3Acct)
      })
      this.myChart = echarts.init(document.getElementById('lines'))
      this.myChart.setOption(option)
      window.addEventListener(`resize`, () => {
        this.myChart.resize()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#lines {
  width: 100%;
  height: 100%;
}
</style>