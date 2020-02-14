const TerserPlugin = require('terser-webpack-plugin')
const path = require('path')

module.exports = {
	publicPath:'./',
	// // 配置 webpack 插件, 不能直接使用webpack配置
	// configureWebpack: config => {
	// 	config.optimization = {
	// 		minimizer: [
	// 			new TerserPlugin({
	// 				terserOptions: {
	// 					compress: {
	// 						drop_console: true
	// 					}
	// 				}
	// 			})
	// 		]
	// 	}
	// },
	css: { // 配置 scss 全局变量,不需要安装其他插件
		loaderOptions: {
			sass: {
				 prependData: `@import "~@/style/value.scss";`
			}
		}
	},
	/*** 是否在构建生产包时生成 sourceMap 文件，false 禁止生成.map文件 **/
	productionSourceMap: false, 
}
