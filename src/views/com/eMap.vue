<template>
  <div class="chartsMap">
    <h1>echarts地图</h1>
    <!-- <img
      id="imgDom"
      src="@/assets/light.png"
      alt=""
    > -->
    <div id="myMap"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
require('echarts/map/js/world.js')
let data = [
  { name: '德国', value: [13.402393, 52.518569] }
]
let LableData = [
  {
    name: '德国',
    coords: [
      [13.402393, 52.518569],
      [13.402393, 77.518569]
    ], // 线条位置[开始位置，结束位置]
    // value: [10.21, 1.20]
  }

];
const imgDom = new Image();
imgDom.src = require('@/assets/light.png');
const options = {
  geo: {
    map: 'world',
    show: true,
    zoom: 1.2, // 当前视角的缩放比例
    emphasis: {
      itemStyle: {
        color: ''
      }
    },
    label: {
      emphasis: {
        show: false
      }
    },
    // layoutSize: '100%'
    itemStyle: {
      normal: {
        // color: {
        //   type: 'linear',
        //   x: 0,
        //   y: 0,
        //   x2: 0,
        //   y2: 1,
        //   colorStops: [{
        //     offset: 0, color: '#263151' // 0% 处的颜色
        //   }, {
        //     offset: 1, color: '#0F1630' // 100% 处的颜色
        //   }],
        //   global: false // 缺省为 false
        // },
        borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: '#00F6FF'
        }, {
          offset: 1,
          color: '#53D9FF'
        }], false),
        borderWidth: 3,
        shadowColor: '#74797F',
        shadowOffsetY: 10,
        shadowBlur: 10
      }
    }
  },
  series: [
    // 常规地图
    {
      type: 'map',
      mapType: 'world',
      // aspectScale: 0.85,
      // layoutCenter: ['50%', '50%'], // 地图位置
      // layoutSize: '100%',
      zoom: 1.2, // 当前视角的缩放比例
      // // roam: true, //是否开启平游或缩放
      // scaleLimit: { // 滚轮缩放的极限控制
      //   min: 1,
      //   max: 2
      // },
      itemStyle: {
        normal: {
          areaColor: '#161F37',
          borderColor: '#1cccff',
          borderWidth: 1.5

        },
        emphasis: {
          areaColor: '#02102b',
          label: {
            color: '#fff'
          }
        }
      }

    },
    // 区域散点图
    // {
    //   type: 'effectScatter',
    //   coordinateSystem: 'geo',
    //   zlevel: 2,
    //   symbolSize: 5,
    //   rippleEffect: { // 坐标点动画
    //     period: 3,
    //     scale: 5,
    //     brushType: 'fill'
    //   },
    //   itemStyle: { // 坐标点颜色
    //     normal: {
    //       show: true,
    //       color: 'red',
    //       shadowBlur: 1,
    //       shadowColor: '#fff'
    //     },
    //     emphasis: {
    //       areaColor: '#f00'
    //     }
    //   },
    //   data: data,
    // },
    {
      type: 'lines',
      zlevel: 3,
      symbol: 'circle',
      symbolSize: [1, 5],
      color: '#ff8003',
      opacity: 1,
      label: {
        show: true,
        padding: [10, 20],
        color: '#fff',
        backgroundColor: '#000',
        // borderColor: '#aee9fb',
        opacity: 0.6,
        // borderWidth: 1,
        borderRadius: 6,
        formatter (params) {
          console.log(params)
          // let arr = [params.name, '上行：' + params.value[1] + 'G/s', '下行：' + params.value[0] + 'G/s'];
          // return arr.join('\n')
          return 'www.baidu.com'
        },
        textStyle: {
          align: 'center',
          lineHeight: 20
        }
      },
      lineStyle: {
        type: 'solid',
        // color: '#F6F72A',
        width: 26,
        opacity: 1,
        // 纹理填充
        color: {
          image: imgDom, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串
          repeat: 'repeat' // 是否平铺，可以是 'repeat-x', 'repeat-y', 'no-repeat'
        },
        // color: {
        //   type: 'linear',
        //   x: 0,
        //   y: 0,
        //   x2: 0,
        //   y2: 1,
        //   colorStops: [
        //     {
        //       offset: 0, color: 'yellow' // 0% 处的颜色
        //     },
        //     {
        //       offset: 0.4, color: '#FCFC2B' // 0% 处的颜色
        //     },
        //     {
        //       offset: 0.8, color: '#B8BB2E' // 0% 处的颜色
        //     },

        //     {
        //       offset: 1, color: '#B8BB2E' // 100% 处的颜色
        //     }
        //   ],
        //   global: false // 缺省为 false
        // },
        // shadowColor: '#000',
        // shadowBlur: 10,
        // shadowOffsetX: 100,
        // shadowOffsetY: 100

      },
      data: LableData

    }
  ]
}
export default {
  data () {
    return {
      myChart: null,
      data: '',
      arrTime: [0, 0]
      // geoCoordMap: [
      //   { name: '芬兰', value: [24.909912, 60.169095], symbolSize: 20 },
      //   { name: '德国', value: [13.402393, 52.518569], symbolSize: 10 },
      //   { name: '英国', value: [-0.126608, 51.208425], symbolSize: 20 },
      //   { name: '韩国', value: [126.979208, 37.53875], symbolSize: 30 },
      //   { name: '日本', value: [139.710164, 35.706962], symbolSize: 40 }
      // ]
      // gedata: [
      //   { name: '芬兰', value: [24.909912, 60.169095], symbolSize: 20 },
      //   { name: '德国', value: [13.402393, 52.518569], symbolSize: 10 },
      //   { name: '英国', value: [-0.126608, 51.208425], symbolSize: 20 },
      //   { name: '韩国', value: [126.979208, 37.53875], symbolSize: 30 },
      //   { name: '日本', value: [139.710164, 35.706962], symbolSize: 40 }
      // ]
    }
  },
  mounted () {
    // options.series[0].data = this.geoCoordMap
    // options.series[1].data = this.gedata
    this.drawChart()
  },
  methods: {
    drawChart () {
      this.myChart = echarts.init(document.getElementById('myMap'))
      this.myChart.setOption(options)
      window.addEventListener(`resize`, () => {
        this.myChart.resize()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.chartsMap {
  widows: 100%;
  height: 100%;
  #myMap {
    width: 80%;
    height: calc(100% - 100px);
    border: 1px solid #ddd;
    margin: 0 auto;
  }
}
</style>