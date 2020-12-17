<template>
  <div>
    <h1>全选 全选当前页面</h1>
    <CheckBoxM
      :tableListOne="tableListOne"
      :dataList="dataList"
      @tableCheckedList="tableCheckedList"
    />
  </div>
</template>

<script>
import CheckBoxM from '@/components/checkBox.vue';
export default {
  components: {
    CheckBoxM
  },
  data () {
    return {
      // breedType: 1 自动  2 手动
      dataList: [
        { id: 1, breedType: 1 },
        { id: 2, breedType: 1 },
        { id: 3, breedType: 1 },
        { id: 4, breedType: 1 },
        { id: 5, breedType: 1 },
        { id: 6, breedType: 2 },
        { id: 7, breedType: 1 },
        { id: 8, breedType: 1 },
        { id: 9, breedType: 1 },
        { id: 10, breedType: 2 },
        { id: 11, breedType: 1 },
        { id: 12, breedType: 1 },
        { id: 13, breedType: 2 },
        { id: 14, breedType: 1 },
        { id: 15, breedType: 1 },
        { id: 16, breedType: 1 },
      ],
      tableListOne: []
    }
  },
  created () {
  },
  methods: {
    tableCheckedList (val) {
      this.tableListOne = val;
      console.log('父组件接收已选值', this.tableListOne);
    },
  }
}
</script>
