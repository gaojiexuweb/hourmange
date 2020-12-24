import Vue from 'vue'
import moment from 'moment'

/** ************************* 常用过滤器，全局注册 ********************************/

/* 数据值不存在的时候的占位值 */
Vue.filter(`placeholder`, (value) => {
  return value || `--`
})

Vue.filter(`forNum`,(value = 0)=>{
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
})

/* 日期格式化 */
Vue.filter(`formatDate`, (value, fmt = `YYYY-MM-DD HH:mm:ss`) => {
  if (!value) {
    return ``
  }
  return moment(value).format(fmt)
})

/*
 * 功能：按千位逗号分割
 * 参数：s，需要格式化的数值.
 * 参数：type,判断格式化后是否需要小数位.
 * 返回：返回格式化后的数值字符串.
 */
Vue.filter(`formatNumber`, (s, type = 0) => {
  let copy = s

  if (/[^0-9.]/.test(copy)) {
    return `0`
  }
  if (copy === null || copy == ``) {
    return `0`
  }
  copy = copy.toString().replace(/^(\d*)$/, `$1.`)
  copy = (copy + `00`).replace(/(\d*\.\d\d)\d*/, `$1`)
  copy = copy.replace(`.`, `,`)
  let re = /(\d)(\d{3},)/

  while (re.test(copy)) {
    copy = copy.replace(re, `$1,$2`)
  }
  copy = copy.replace(/,(\d\d)$/, `.$1`)
  if (type == 0) { // 不带小数位(默认是有小数位)
    let a = copy.split(`.`)

    if (a[1] == `00`) {
      copy = a[0]
    }
  }
  return copy
})

/**
 * 数字转大写中文
 * @param {Number} num
 * @returns '一二三....'
 */
Vue.filter(`toChinesNum`, (num) => {
  let changeNum = [`零`, `一`, `二`, `三`, `四`, `五`, `六`, `七`, `八`, `九`] // changeNum[0] = "零"

  let unit = [``, `十`, `百`, `千`, `万`]

  let copy = parseInt(num)

  let getWan = (temp) => {
    let strArr = temp.toString().split(``).reverse()

    let newNum = ``

    for (let i = 0; i < strArr.length; i++) {
      newNum = (i == 0 && strArr[i] == 0 ? `` : i > 0 && strArr[i] == 0 && strArr[i - 1] == 0 ? `` : changeNum[strArr[i]] + (strArr[i] == 0 ? unit[0] : unit[i])) + newNum
    }
    return newNum
  }

  let overWan = Math.floor(copy / 10000)

  let noWan = copy % 10000

  if (noWan.toString().length < 4) {
    noWan = `0` + noWan
  }
  return overWan ? getWan(overWan) + `万` + getWan(noWan) : getWan(copy)
})

/* 是否格式化 */
Vue.filter(`yesOrNo`, (value) => {
  return value == 1 ? `是` : `否`
})
