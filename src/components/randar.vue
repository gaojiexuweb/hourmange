<template>
  <div
    id="randar"
    ref="randar"
    class="randar"
  />
</template>

<script>
import echarts from 'echarts'
const optionsRandar = {
  radar: [{
    radius: '55%',
    name: {
      formatter: function (value, indicator) {
        if (value) {
          return value.split(' ')[0] + `{title|${value.split(' ')[1]}}`;
        }
      },
      textStyle: {
        color: '#DBDBDB',
        fontSize: 12,
        padding: 0,
        rich: {
          title: {
            color: '#FFC000',
            padding: [0, 0, 0, 5],
            align: 'center'
          }
        }
      }
    },
    indicator: [],
    center: ['50%', '50%'], // 位置
    shape: 'circle', // 形状
    splitNumber: 8,
    splitArea: {
      areaStyle: {
        color: 'transparent' // 圆环颜色
      }
    },
    axisLine: {
      lineStyle: {
        color: 'rgba(36,64,114)' // 分割线
      }
    },
    splitLine: {
      lineStyle: {
        color: 'rgba(36,64,114)', // 圆线
        width: 1
      }
    }
  }],
  series: [{
    type: 'radar',
    data: [{
      value: [],
      symbolSize: 0,
      lineStyle: {
        color: '#00CE93'
      },
      areaStyle: {
        normal: {
          color: {
            type: 'radial',
            x: 0.5,
            y: 0.5,
            r: 0.5,
            colorStops: [{
              offset: 0,
              color: 'rgba(0,206,147,1)' // 0% 处的颜色
            }, {
              offset: 1,
              color: 'rgba(0,206,147,0.4)' // 100% 处的颜色
            }],
            global: false // 缺省为 false
          }
        }
      }

    }

    ]
  }]
}
export default {
  props: {
    randarData: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      myChart: null
    }
  },
  watch: {
    randarData (val) {
      if (this.myChart) {
        this.myChart.dispose()
      }
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
      optionsRandar.radar[0].indicator = [{ name: '', min: 0 }]
      optionsRandar.series[0].data[0].value = []
      if (this.randarData[0] && this.randarData[0].type) {
        optionsRandar.radar[0].indicator = []
        this.randarData.map((item, idx) => {
          optionsRandar.radar[0].indicator.push({ name: item.type + ' ' + item.total, min: 0 })
          optionsRandar.series[0].data[0].value.push(item.total)
        })
      }
      let barRandar = this.$refs.randar;
      this.myChart = echarts.init(barRandar)
      this.myChart.setOption(optionsRandar)
      window.addEventListener(`resize`, () => {
        this.myChart.resize()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.randar {
  width: 60%;
  height: 100%;
}
</style>