<!--
 * @Description: 
 * @Author: hyx
 * @Date: 2022-02-14 16:42:02
 * @LastEditors: hyx
 * @LastEditTime: 2022-02-14 16:42:03
-->

<template>
  <div>
    <div class="admin-new">
      <div class="container">
        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <ul class="admin-menu">
            <li>
              <router-link to="/admin">View Products</router-link>
            </li>
            <li>
              <router-link to="/admin/new">New Products</router-link>
            </li>
          </ul>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
