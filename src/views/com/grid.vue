<template>
  <div class="grid">
    <div
      v-for="(item,idx) in (count+1)"
      :key="idx"
    >
      <div class="odd">
        <div
          v-if="dataList[6*idx]"
          :class="['item-1',{'oddrow_1':dataList[6*idx+1] ? false : true},{'oddrow_2':dataList[6*idx+1] && (dataList[6*idx+2] ? false : true)}]"
        >{{dataList[6*idx]}}</div>
        <div v-if="dataList[6*idx+1]">{{dataList[6*idx+1]}}</div>
        <div v-if="dataList[6*idx+2]">{{dataList[6*idx+2]}}</div>
      </div>
      <div class="even">
        <div
          v-if="dataList[6*idx+3]"
          :class="{'row_1':dataList[6*idx+4] ? false : true}"
        >{{dataList[6*idx+3]}}</div>
        <div v-if="dataList[6*idx+4]">{{dataList[6*idx+4]}}</div>
        <div
          v-if="dataList[6*idx+5]"
          class="item-3"
        >{{dataList[6*idx+5]}}</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      dataList: [1, 2, 3, 4],
      len: 0,
      count: 0
    }
  },
  created () {
    this.shunk()
  },
  methods: {
    shunk () {
      this.len = this.dataList.length
      this.count = Math.floor(this.len / 6)
    }
  }
}
</script>

<style lang="scss" scoped>
.grid {
  .odd {
    display: grid;
    grid-template-columns: 30px 30px;
    grid-template-rows: 30px 30px;
    div {
      border: 1px solid #ddd;
    }
  }
  .even {
    display: grid;
    grid-template-columns: 30px 30px;
    grid-template-rows: 30px 30px;
    div {
      border: 1px solid #ddd;
    }
  }
  .item-1 {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
  }
  .item-3 {
    // background-color: #4ba946;
    grid-column: 2 / 3;
    grid-row: 1 / 3;
  }
  .oddrow_1 {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }
  .oddrow_2 {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
  .row_1 {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }
}
</style>