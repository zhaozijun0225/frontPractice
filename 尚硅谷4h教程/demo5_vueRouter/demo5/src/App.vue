<script setup>

</script>

<template>
  <!--  a链接不再使用-->
  <!--<a href="/">首页</a>-->
  <!--  <a href="/hello">hello</a>-->
  <!--  <a href="/haha">哈哈</a>-->

  <router-link to="/">首页</router-link>
  <router-link to="/hello">hello</router-link>
  <router-link to="/haha/111">haha</router-link>
  <router-link to="/haha/abc">hahaabc</router-link>
  <router-link to="/user/007">用户中心</router-link>

  <hr>
<!--  根据routerlink决定展示页面-->
  <router-view></router-view>

</template>

<style scoped>
  a{
    margin-left: 10px;
  }
</style>
