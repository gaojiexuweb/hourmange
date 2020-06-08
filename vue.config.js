const path = require('path')

const resolve = dir => path.join(__dirname, dir)

const publicPath = process.env.NODE_ENV === "production" ? "/" : "/"

module.exports = {
    lintOnSave: false,   //取消严格模式
    publicPath: publicPath,
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('_c', resolve('src/components'))
    },
    outputDir: "hourmange", //输出目录
    productionSourceMap: false,//打包时不生产.map文件  
    devServer: {
        proxy: 'http://localhost:4000'
    }
}