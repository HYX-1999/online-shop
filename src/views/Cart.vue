<!--
 * @Description: 
 * @Author: hyx
 * @Date: 2022-02-14 16:12:54
 * @LastEditors: hyx
 * @LastEditTime: 2022-02-14 16:12:54
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
    name: 'Cart',
    setup() {
      const msg = 'Welcome to the Cart Page'

      return {
        msg
      }
    }
  }
</script>
