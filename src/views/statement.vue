<template>
  <div class="statement">
    <el-card class="page-search-card" shadow="never">
      <div style="float:right;">
        <el-button type="primary" @click="handleClick" size="small">返回</el-button>
      </div>
      <el-form :inline="true" :model="formInline" class="demo-form-inline" @submit.native.prevent>
        <el-form-item label="报表名称">
          <el-input v-model.trim="formInline.name" placeholder="请输入报表名称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small" @click="handleSearch()">查询</el-button>
          <el-button type="primary" size="small" plain @click="handleReset">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card class="page-content-card" shadow="never">
      <div slot="header">
        <span>信息列表</span>
        <div style="float:right">
          <el-button icon="el-icon-plus" type="primary" size="small" @click="handleAdd">新增</el-button>
        </div>
      </div>
      <div class="table">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="日期" width="180"></el-table-column>
          <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "Statement",
  data() {
    return {
      formInline: {},
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    handleSearch() {},
    handleReset() {
      this.formInline = {};
      this.handleSearch();
    },
    handleAdd() {},
    handleClick() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
.statement {
  height: calc(100% - 50px);
}
</style>


