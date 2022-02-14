/*
 * @Description: 
 * @Author: hyx
 * @Date: 2022-02-14 15:59:07
 * @LastEditors: hyx
 * @LastEditTime: 2022-02-14 16:37:34
 */

module.exports = {
	root: true,
  parserOptions: {
		sourceType: 'module'
  },
	parser: "vue-eslint-parser",
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
	}
}