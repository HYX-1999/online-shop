<!--
 * @Description: 
 * @Author: hyx
 * @Date: 2022-02-14 16:11:37
 * @LastEditors: hyx
 * @LastEditTime: 2022-02-14 16:12:38
-->

<template>
  <div>
    <div class="title">
      <h1>{{msg}}</h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Admin',
    setup() {
      const msg = 'Welcome to the Admin Page'

      return {
        msg
      }
    }
  }
</script>
