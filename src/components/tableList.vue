<template>
  <!--刷新按钮 和 筛选列的多选框 layout中要有 control 才显示，默认显示-->
  <div class="table">
    <div class="table-control" v-if="layoutKey.control">
      <div class="table-control-title" @click="reload">
        <i class="el-icon-refresh"></i>
      </div>
      <el-dropdown class="table-control-title">
        <span class="el-dropdown-link">
          <i class="el-icon-s-operation table-control-icon"></i>
        </span>
        <el-dropdown-menu slot="dropdown" class="table-control-checkbox">
          <el-checkbox-group v-model="headItems" @change="changeChecked">
            <el-checkbox
              class="table-control-checkbox-item"
              v-for="(item,index) in allColumn"
              :label="item"
              :key="index"
            >{{item}}</el-checkbox>
          </el-checkbox-group>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <!--列表主体-->
    <el-table
      class="table"
      style="width: 100%"
      ref="tableList"
      :data="tableData"
      :defaultSort.async="defaultSort"
      v-bind="$attrs"
      v-on="$listeners"
      @selectionChange="selectionChange"
      @sort-change="sortChange"
    >
      <ex-table-column v-if="layoutKey.expand" type="expand" fixed>
        <slot name="expand" :data="props" slot-scope="props" />
      </ex-table-column>
      <ex-table-column
        v-if="layoutKey.checkBox"
        fixed
        type="selection"
        :width="62"
        :selectable="selectable"
      />
      <ex-table-column v-if="layoutKey.index" type="index" label="序号" width="60" />
      <ex-table-column
        v-for="(column,index) in activeColumn"
        :key="index"
        :prop="column.field"
        :column-key="column.field"
        :label="column.title"
        :fixed="column.fixed"
        :sortable="column.sort"
        :selectable="column.selectable"
        :show-overflow-tooltip="column.tooltip"
        :autoFit="true"
        :width="column.width"
        :fitByClass="autoWidth(column.width)"
        :minWidth="column.minWidth || defaultWidth"
      >
        <slot
          :name="column.field"
          :data="scope.row"
          :field="column.field"
          :content="column.field"
          :index="index"
          slot-scope="scope"
        >
          <div>{{$utils.nvl(scope.row[column.field],'--')}}</div>
        </slot>
      </ex-table-column>
    </el-table>
    <!--分页控件，layout中要有 control 才显示，默认显示-->
    <el-pagination
      background
      small
      class="table-pagination"
      :current-page.sync="page.pageNo"
      :page-sizes="page.list"
      :page-size="page.pageSize"
      :layout="page.layout"
      :total="page.total"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
      v-if="layoutKey.page"
    />
  </div>
</template>

<script>
import debounce from "lodash/debounce";
import ExTableColumn from "./ExTableColumn";

export default {
  components: { ExTableColumn },
  // 提供出来给其他组件调用，具体用法参考 vue 官方用法
  provide() {
    return {
      tableList: this
    };
  },

  props: {
    // 默认的表格大小
    defaultWidth: {
      type: Number,
      required: false,
      default: 100
    },
    // 显示的控件，目前就page,control 两个可选，可根据需求自行扩展
    layout: {
      default: "page,control"
    },
    // 多选时 返回的key，默认id
    checkKey: {
      type: [Number, String],
      default: () => "id"
    },
    // 请求参数，必填
    req: {
      type: Object,
      required: true,
      default: () => ({
        url: undefined,
        type: "post",
        params: {
          query: {}
        },
        pageNo: 1,
        pageSize: 1
      })
    },
    // 默认排序，参考 elementUI table 用法
    defaultSort: {
      type: [String, Object],
      required: false
    },
    // 列表显示的列
    //  {
    //     title ：    必填  String，      显示的列名
    //     field ：    必填  String ，     列中的key
    //     width ：    选填，String        列宽，单位像素,
    //     fixed ：    选填，String        是否固定的列，可选 right, left
    //     sort  ：    选填，Boolean       是否可排序
    //     expend：    选填，Boolean       是否可展开,配置slot:expand 显示展开内容
    //     limit :     选填，Boolean       权限控制，false 则不显示
    // }
    columns: {
      type: Array,
      required: true,
      default: () => [
        { title: "操作", field: "ctrl", width: "60", fixed: "right" }
      ]
    },

    // 这一行的 CheckBox 是否可以勾选，用法参考elementUI table用法
    selectable: {
      type: Function,
      default: () => true
    }

    // 其他table参数，都会传给table
  },
  data() {
    return {
      layoutKey: {},

      page: {
        list: [5, 10, 20, 50, 100],
        total: null,
        pageSize: 10,
        pageNo: 1,
        layout: "total,sizes,prev,pager,next,jumper"
      },

      tableData: [],
      sort: "",
      checkRows: [],
      checkKeys: [],

      headItems: [],
      allColumn: [],
      activeColumn: []
    };
  },

  methods: {
    sortChange({ prop, order }) {
      this.sort = `${prop} ${order === "descending" ? "desc" : "asc"}`;
      this.refresh();
    },

    selectionChange(selection) {
      this.checkRows = selection;
      this.checkKeys = [];
      selection.map(row => {
        this.checkKeys.push(row[this.checkKey]);
        return true;
      });
      this.$emit("selectionChange", selection);
    },

    /** **************************method*********************************** */

    // 分页
    async handleCurrentChange(currentPage) {
      this.page.pageNo = currentPage;
      this.$emit("handleCurrentChange", currentPage);
      await this.initTable({ vm: this });
    },

    handleSizeChange(size) {
      this.page.pageSize = size;
      this.page.pageNo = 1;
      this.$emit("handleSizeChange", size);
      this.initTable({ vm: this });
    },

    /** *****************************动态渲染头部************************************* */
    // 取消选中菜单
    changeChecked() {
      this.changeColumn({ vm: this });
    },
    changeColumn: debounce(async ({ vm }) => {
      const that = vm;
      const keys = new Set(vm.headItems);
      const activeColumn = vm.columns.filter(item => {
        if (keys.has(item.title)) {
          return true;
        }
        return false;
      });
      that.activeColumn = activeColumn;
      that.activeColumn.splice(1, 0);
    }, 200),

    /** *****************************刷新************************************* */
    // 刷新表格数据（使用现有参数）
    refresh(type) {
      if (
        type === "delete" &&
        this.page.pageNo > 1 &&
        this.tableData.length === 1
      ) {
        this.page.pageNo = this.page.pageNo - 1;
      }
      this.initTable({ vm: this });
    },

    // 重新加载数据（重置到第一页）
    reload() {
      if (this.page.pageNo !== 1) {
        this.page.pageNo = 1;
      }
      this.initTable({ vm: this });
    },

    initTable: debounce(async ({ vm }) => {
      const that = vm;
      that.tableData = [];
      const params = that._.assign(
        {
          pageNo: that.page.pageNo,
          pageSize: that.page.pageSize,
          sortStr: that.sort
        },
        that.req.params
      ); // 右值覆盖左值，返回左值
      // 发起请求，根据实际项目中，接口来做
      const { data } = await window.axios[that.req.type || "post"](
        that.req.url,
        params
      );
      if (data && that.$utils.Type.isArray(data.result)) {
        that.tableData = data.result;
        that.page.total = data.total * 1;
      }
      that.$nextTick(() => {
        that.$emit("loadDone", that.tableData, params);
      });
    }, 300),

    getCheckRows() {
      return this.checkRows;
    },

    getCheckKeys() {
      return this.checkKeys;
    },

    handleHead(columns) {
      const allColumn = [];
      columns.map(item => {
        if (!item.limit) {
          allColumn.push(item.title);
        }
        return true;
      });
      this.headItems = allColumn;
      this.allColumn = allColumn;
      this.changeChecked();
    },

    handleLayout() {
      const layout = this.layout;
      if (!layout) return null;
      layout.split(",").map(item => {
        const key = item.trim();
        this.layoutKey[key] = true;
        return true;
      });
      return this.layoutKey;
    },

    autoWidth(width) {
      if (this.$utils.isEmpty(width)) {
        return "cell";
      }
      return width;
    },

    init() {
      this.handleLayout();
      this.handleHead(this.columns);
      if (this.defaultSort) {
        const { prop, order } = this.defaultSort;
        this.sort = `${prop} ${order === "descending" ? "desc" : "asc"}`;
      }
      this.initTable({ vm: this });
    }
  },
  async created() {
    this.init();
  },

  watch: {
    queryParams: {
      handler() {
        this.reload({ vm: this });
      }
    },
    columns: {
      handler() {
        this.handleHead(this.columns);
      }
    }
  },
  computed: {
    queryParams() {
      if (this.$utils.isNotEmpty(this.req.params)) {
        return this.req.params;
      }
      return {};
    }
  }
};
</script>

<style lang="less" scoped>
@import "./style/index";
</style>
