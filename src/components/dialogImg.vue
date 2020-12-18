<template>
  <div class="pics">
    <div>
      <el-carousel
        ref="carouselPic"
        trigger="click"
        height="400px"
        :autoplay="false"
      >
        <el-carousel-item
          v-for="(item,index) in list"
          :key="index"
          name="index"
        >
          <el-image
            style="width:100%;height:400px"
            :src="require(`@/assets/img/${item}.jpg`)"
          />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- <ul class="carouselIndex">
      <li
        v-for="(item,index) in list"
        :key="index"
        @click="setActiveItem(index)"
      >
        {{ item }}
      </li>
    </ul> -->
    <div style="height:100px;margin-top:10px">
      <div class="carousel-box">
        <div class="top-item-box">
          <swiper
            ref="mySwiper"
            :options="swiperOption"
            class="allSwiper"
          >
            <swiper-slide
              v-for="(item,index) in list"
              :key="index"
            >
              <el-image
                style="width:100px;height:100px"
                :src="require(`@/assets/img/${item}.jpg`)"
                fit="cover"
              />
            </swiper-slide>
            <!-- 左右箭头 -->
            <div
              slot="button-prev"
              class="swiper-button-prev swiper-button-white"
            />
            <div
              slot="button-next"
              class="swiper-button-next swiper-button-white"
            />
          </swiper>
          <!-- <div class="swiper-button-prev " />
          <div class="swiper-button-next" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: `pics`,
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    let that = this
    return {
      swiperOption: {
        speed: 300,
        grabCursor: true,
        slidesPerView: 6,
        spaceBetween: 10,
        slidesPerGroup: 1,
        loop: false,
        loopFillGroupWithBlank: true,
        preventClicksPropagation: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          disabledClass: 'my-button-disabled'
        },
        on: {
          click: function (e) {
            that.setActiveItem(this.clickedIndex)
          }
        }
      }

    }
  },
  methods: {
    set (index) {
      console.log(95, index)
    },
    setActiveItem (index) {
      this.$refs.carouselPic.setActiveItem(index)
    }
  }
}
</script>

<style lang="scss" scoped>
.pics {
  .carouselIndex {
    display: flex;
    & > li {
      width: 100px;
      height: 50px;
      margin-right: 20px;
    }
  }
  .top-item-box {
    display: flex;
    width: 100%;
    height: 100px;
    line-height: 100px;
    .allSwiper {
      width: 100%;
      .my-button-disabled {
        opacity: 0.2;
      }
    }
    .swiper-button-white {
      background: #333;
      // padding: 10px !important;
      width: 18px !important;
      height: 23px !important;
      // margin-top: -12px!important;
    }
    .swiper-container {
      width: 100%;
      height: 100%;
      --swiper-navigation-color: #000; /* 单独设置按钮颜色 */
      --swiper-navigation-size: 12px; /* 设置按钮大小 */
    }
  }
}
</style>