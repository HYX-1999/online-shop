<!--
 * @Description: 
 * @Author: hyx
 * @Date: 2022-02-14 14:50:45
 * @LastEditors: hyx
 * @LastEditTime: 2022-02-14 16:18:21
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
    name: 'Home',
    setup() {
      const msg = 'Welcome to the Home Page'

      return {
        msg
      }
    }
  }
</script>

