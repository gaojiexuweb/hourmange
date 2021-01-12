<template>
  <div>
    {{ 13524 | forNum }} --
    {{ 13524 | formatNumber }}
    {{ str.padStart(2,'0') }}
    {{ str.padEnd(2,'0') }}
    <div>
      <el-input
        @keyup.f2="add()"
        v-model="strF2"
      ></el-input>
      <span>{{strF2}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      str: '1',
      strF2: null
    }
  },
  methods: {
    add () {
      console.log('f2')
    }
  }
}
</script>

<style>
</style>