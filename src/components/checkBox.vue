<template>
  <div class="checkboxM">
    <el-card
      class="page-content-card"
      shadow="never"
    >
      <div style="display:flex">
        <el-checkbox
          v-if="checkAllNow"
          v-model="checkAllT"
          @change="handleCheckAllChangeT"
        >
          全选
        </el-checkbox>
        <el-checkbox
          v-if="checkAllNow"
          v-model="checkAll"
          @change="handleCheckAllChange"
        >
          全选当前页面
        </el-checkbox>
      </div>
      <div class="allList">
        <div
          v-for="(row,index) in lodash.chunk(showList,4)"
          :key="index"
          class="row"
        >
          <div
            v-for="(item,idx) in row"
            :key="idx"
            class="column"
          >
            <div
              class="box"
              :class="tableListOne.includes(item.id)?'boxActive':''"
              @click="checkBox(index,idx,item.breedType)"
            >
              123
              <div v-if="showCheck && item.breedType == 1">
                <label
                  class="el-checkbox"
                  :class="tableListOne.includes(item.id)?'is-checked':''"
                >
                  <span
                    class="el-checkbox__input"
                    :class="[{ 'is-checked': tableListOne.includes(item.id) }]"
                  >
                    <span class="el-checkbox__inner" />
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 分页 S -->
      <div
        v-if="total > 0&&showPagination"
        class="dataTable-pagination-box"
      >
        <el-pagination
          layout="total"
          :total="total"
          class="dataTable-pagination"
          style="float:left"
        />
        <el-pagination
          background
          :current-page="page"
          :page-size="limit"
          layout=" prev, pager, next, sizes"
          :total="total"
          class="dataTable-pagination"
          @current-change="currentChange"
          @size-change="sizeChange"
        />
      </div>
      <!-- 分页 E -->

      <div
        v-if="showNextOrPrev"
        class="footer"
      >
        <el-button
          type="primary"
          @click="handleNext"
        >
          下一步
        </el-button>
        <el-button
          type="primary"
          plain
          @click="handleCancel"
        >
          取消
        </el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: `checkBoxM`,
  props: {
    tableListOne: {
      type: Array,
      default: () => {
        return [];
      }
    },
    dataList: {
      type: Array,
      default: () => {
        return [];
      }
    },
    checkAllNow: {
      type: Boolean,
      default: true
    },
    showCheck: {
      type: Boolean,
      default: true
    },
    showNextOrPrev: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      checkAll: false,
      checkAllT: false,
      tranerList: [],
      showList: [],
      checked: false,
      showPagination: true,
      // 加载状态
      loading: true,
      // 页码
      page: 1,
      // 页数
      limit: 10,
      // 总数
      total: 0,
      lodash: require('lodash'),
      autoBreeList: [],
      allAuto: [],
      allIds: []
    };
  },
  watch: {
    dataList: {
      immediate: true,
      handler (val) {
        this.dataList = val;
        this.paging();
      },
      deep: true
    }
  },
  created () {
  },
  methods: {
    paging () {
      this.page = 1;
      this.limit = 10;
      this.total = this.dataList.length;
      this.showList = this.dataList.slice(this.limit * (this.page - 1), this.limit * this.page);
      if (this.total == 0) {
        this.checkAll = false;
        this.checkAllT = false;
      }
      // 获取所有的id
      this.allIds = []
      this.dataList.map((item) => {
        this.allIds.push(this.lodash.at(item, 'id'));
      });
      // 获取所有自动id
      this.allAuto = []
      this.dataList.map((item) => {
        if (item.breedType == 2) {
          this.allAuto.push(this.lodash.at(item, 'id'));
        }
      });
      // 获取当前页面自动的id
      this.autoBreeList = []
      this.showList.map((item) => {
        if (item.breedType == 2) {
          this.autoBreeList.push(this.lodash.at(item, 'id'));
        }
      });
      this.afterResert()
    },
    afterResert () {
      let parentList = this.tableListOne;
      // 获取当前列表id
      let showArr = [];
      this.showList.map((item) => {
        showArr.push(this.lodash.at(item, 'id'));
      });
      // 获取当前页面自动的id
      this.autoBreeList = []
      this.showList.map((item) => {
        if (item.breedType == 2) {
          this.autoBreeList.push(this.lodash.at(item, 'id'));
        }
      });
      if (parentList.length == 0 || this.lodash.flatten(showArr).length == 0 ||
        this.lodash.flatten(showArr).length == this.lodash.flatten(this.autoBreeList).length) {
        this.checkAll = false
        this.checkAllT = false
      } else {
        if (this.lodash.difference(this.lodash.flatten(showArr), parentList).length == this.lodash.flatten(this.autoBreeList).length) {
          this.checkAll = true
          if (this.lodash.difference(this.lodash.flatten(this.allIds), parentList).length > this.allAuto.length) {
            this.checkAllT = false
          } else if (this.lodash.difference(this.lodash.flatten(this.allIds), parentList).length == this.allAuto.length) {
            this.checkAllT = true
          }
        } else {
          this.checkAll = false
          this.checkAllT = false
        }
      }
    },
    checkBox (index, idx, breedType) {
      if (breedType !== 2) {
        // 获取当前列表id
        let showArr = this.showList.map((item) => {
          return this.lodash.at(item, 'id')
        });
        // 获取父组件传值id
        let arr = Object.assign([], this.tableListOne);
        // 点击是否选中事件
        let idN = arr.indexOf(this.showList[4 * index + idx].id);
        if (idN > -1) {
          arr.splice(idN, 1);
        } else {
          arr.push(this.showList[4 * index + idx].id);
        }
        this.$emit('tableCheckedList', arr);

        if (this.lodash.difference(this.lodash.flatten(showArr), arr).length == this.lodash.flatten(this.autoBreeList).length) {
          this.checkAll = true

          if (this.lodash.difference(this.lodash.flatten(this.allIds), arr).length > this.allAuto.length) {
            this.checkAllT = false
          } else if (this.lodash.difference(this.lodash.flatten(this.allIds), arr).length == this.allAuto.length) {
            this.checkAllT = true
          }
        } else {
          this.checkAll = false
          this.checkAllT = false
        }
      } else {
        this.error('自动养护不可以选择,请切换为手动模式');
        return false
      }
    },
    // 全部选中
    handleCheckAllChangeT (val) {
      let parentList = this.tableListOne;
      let arr = [];
      this.dataList.map((item) => {
        if (item.breedType == 1) {
          arr.push(this.lodash.at(item, 'id'));
        }
      });
      if (val) {
        let allSeacrh = this.lodash.uniq(this.lodash.concat(parentList, this.lodash.flatten(arr)))
        this.$emit('tableCheckedList', allSeacrh);
      } else {
        this.$emit('tableCheckedList', this.lodash.difference(parentList, this.lodash.flatten(arr)));
      }
      this.checkAll = val;
    },

    // 全选当前页面
    handleCheckAllChange (val) {
      let parentList = this.tableListOne;
      let arr = [];
      this.showList.map((item) => {
        if (item.breedType == 1) {
          arr.push(this.lodash.at(item, 'id'));
        }
      });

      this.$emit(
        'tableCheckedList',
        val
          ? this.lodash.uniq(this.lodash.concat(parentList, this.lodash.flatten(arr)))
          : this.lodash.difference(parentList, this.lodash.flatten(arr))
      );
      if (val) {
        if (!(this.lodash.uniq(this.lodash.concat(parentList, this.lodash.flatten(arr))).length <
          (this.dataList.length - this.allAuto.length))) {
          this.checkAllT = true;
        }
      }
      if (!val) {
        this.checkAllT = false
      }
    },
    /* 改变条数 */
    sizeChange (limit) {
      this.limit = limit;
      this.page = 1;
      this.showList = this.dataList.slice(
        this.limit * (this.page - 1),
        this.limit * this.page
      );
      this.afterResert()
    },
    /* 改变页码 */
    currentChange (page) {
      this.page = page;
      this.showList = this.dataList.slice(
        this.limit * (this.page - 1),
        this.limit * this.page
      );
      this.afterResert()
    },
    handleNext () {
      if (this.tableListOne.length > 0) {
        this.$emit('next');
      } else {
        this.$message({
          type: 'warning',
          message: '请选择账号'
        });
      }
      // this.$emit('next');
    },
    handleCancel () {
      this.askBox(`确认取消？`).then(() => {
        this.$router.push({
          name: `group`
        });
      }).catch(() => {

      })
    }
  }
};
</script>

<style lang='scss'>
// .dataTable .dataTable-pagination-box {
//   padding: 24px 24px 24px 12px;
//   overflow: hidden;
//   background: white;
// }
.checkboxM {
  .el-card {
    max-height: 675px;
  }
  .el-card__body {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .allList {
    width: 100%;
    max-height: 450px;
    overflow-x: hidden;
    border-top: 1px solid #ebeef5;
    padding: 0 10px;
    .column {
      display: inline-block;
      width: calc(25% - 20px);
      box-sizing: border-box;
      height: 120px;
      margin: 10px;
      .box {
        cursor: pointer;
        height: 100%;
        border: 1px solid #f2f4f7;
        display: grid;
        grid-template-columns: 2fr 4fr 1fr;
        color: gray;
        .img {
          display: inline-block;
          width: 90px;
          height: 98px;
          margin-top: 10px;
          margin-left: 10px;
        }
        .middle {
          display: flex;
          flex-flow: column;
          justify-content: space-between;
          padding: 10px 0 10px 10px;
          .logo {
            width: 16px;
            height: 16px;
            vertical-align: middle;
            margin-right: 10px;
          }
          span {
            display: inline-block;
          }

          .modelClass {
            padding: 0px 5px;
            text-align: center;
            background: #e6f5fc;
            margin-right: 10px;
            color: #73b6ef;
          }
          .activeClass {
            background: #e5f8f5;
            color: #0ac6ab;
          }
        }
        .el-checkbox {
          float: right;
          margin-right: 10px;
          margin-top: 10px;
        }
      }
      .boxActive {
        background: #f6fdff !important;
        border: 1px solid #e1ecf2 !important;
      }
    }
  }
  .noData {
    text-align: center;
    background: #fff;
    height: 100%;
  }
  .dataTable-pagination-box {
    padding: 0px 24px 0px 12px;
    overflow: hidden;
    height: 80px;
    // border-bottom: 1px solid #ebeef5;
    margin-bottom: 20px;
    background: white !important;
  }
  .el-pagination span:not([class*="suffix"]),
  .el-pagination button {
    margin-left: 16px;
  }
  .el-pagination.is-background .btn-next,
  .el-pagination.is-background .btn-prev,
  .el-pagination.is-background .el-pager li {
    margin: 0 4px;
  }
  .total {
    color: #409eff;
    font-size: 14px;
  }
  .el-pagination {
    margin: 25px 0 0;
    float: right;
    &__sizes {
      margin: 0 5px 0 0;
    }
    &__jump {
      margin-left: 0;
    }
  }
  .footer {
    padding-left: 20px;
    padding-bottom: 20px;
    border: none;
    border-top: 1px solid #ebeef5;
  }
}
</style>
