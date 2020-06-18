// 密码验证
const pwd = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/;
//电子邮箱
const emailReg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; 
//手机号
const mobileReg = /^[1][3,4,5,7,8][0-9]{9}$/;
//座机号码
const telReg = /^[0][1-9]{2,3}-[0-9]{5,10}$/;
//手机和座机一体
const phoneTelReg = /^((0\d{2,3}-\d{7,8})|(1[3587496]\d{9}))$/;
//身份证号码
const idCardReg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|30|31)|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}([0-9]|x|X)$/;
//是否为整数
const isIntegerReg = /^[1-9][0-9]*$/;
// const isIntegerReg = /^[1-9]\d*|0$/;
//是否为整数和小数
const reg = /^(([^0][0-9]+|0)\.([0-9]{1,2})$)|^(([^0][0-9]+|0)$)|^(([1-9]+)\.([0-9]{1,2})$)|^(([1-9]+)$)/;
//大于0的数
const numGreater = /^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/;
// 正能源车牌
const isLicensePlate = /^(([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z](([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领]))$/;
const License = /^[a-z\d]+$/i;
const rules = {
    validPwd(rule, value, callback) {
        console.log(pwd.test(value))
        if (!pwd.test(value) && value) {
            return callback(new Error('密码须包含数字、字母两种元素，且密码位数为6-16位'))
        } else {
            callback()
        }
    },
    validIdLicense(rule, value, callback) {
        if (!License.test(value) && value) {
            return callback(new Error('车牌不合法'))
        } else {
            callback()
        }
    },
    validIdEmail(rule, value, callback) {
        if (!emailReg.test(value) && value) {
            return callback(new Error('邮箱格式不合法'))
        } else {
            callback()
        }
    },
    validIdCard(rule, value, callback) {
        if (!idCardReg.test(value) && value) {
            return callback(new Error('身份证号码格式不合法'))
        } else {
            callback()
        }
    },
    validPhone(rule, value, callback) {
        if (!mobileReg.test(value) && value) {
            return callback(new Error('手机号格式不合法'))
        } else {
            callback()
        }
    },
    validIdTel(rule, value, callback) {
        if (value && !telReg.test(value)) {
            return callback(new Error('座机号格式不合法'))
        } else {
            callback()
        }
    },
    validPhoneTel(rule, value, callback) {
        if (!phoneTelReg.test(value) && value) {
            return callback(new Error('手机号或座机号格式不合法'))
        } else {
            callback()
        }
    },
    valueIsInteger(rule, value, callback) {
        if (!isIntegerReg.test(value) && value) {
            return callback(new Error('请输入正整数'))
        } else {
            callback()
        }
    },
    valueIsDecimal(rule, value, callback) {
        if (!reg.test(value)) {
            return callback(new Error('请输入数值,最多含有两位小数'))
        } else {
            callback()
        }
    },
    numGreater(rule, value, callback) {
        if (!numGreater.test(value)) {
            return callback(new Error('请输入大于0的数'))
        } else {
            callback()
        }
    },
};
export default rules
