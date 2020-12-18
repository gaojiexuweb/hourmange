<template>
  <div class="imgDialog">
    <DialogImg :list="list" />
  </div>
</template>

<script>
import DialogImg from '@/components/dialogImg.vue';
export default {
  components: {
    DialogImg
  },
  data () {
    return {
      list: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
      ],
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
<style lang="scss" scoped>
.imgDialog {
  width: 60%;
  margin: 0 auto;
}
</style>
