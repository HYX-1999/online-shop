/*
 * @Description: 
 * @Author: hyx
 * @Date: 2022-02-14 14:36:17
 * @LastEditors: hyx
 * @LastEditTime: 2022-02-14 15:50:11
 */

const plugins = ['@vue/babel-plugin-jsx']

if (process.env.NODE_ENV === 'production') {
  plugins.push('transform-remove-console')
}

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins
}
