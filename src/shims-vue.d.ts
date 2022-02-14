/*
 * @Description: 
 * @Author: hyx
 * @Date: 2022-02-14 14:36:17
 * @LastEditors: hyx
 * @LastEditTime: 2022-02-14 15:31:33
 */
/* eslint-disable */
declare module '*.vue' {
	import type { DefineComponent } from 'vue'
	const component: DefineComponent<{}, {}, any>
	export default component
  }
  
declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'
declare module '*.css'
declare module '*.scss'
interface ZhCN {
	[key: string]: any
}
declare module 'ant-design-vue/lib/locale-provider/zh_CN' {
	import zh from 'ant-design-vue/lib/locale-provider/zh_CN'
	const zh_CN: ZhCN

	export default zh_CN
}
