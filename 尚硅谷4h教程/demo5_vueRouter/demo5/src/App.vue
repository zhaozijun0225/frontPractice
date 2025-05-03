<script setup>
import {useRouter} from "vue-router";

const router = useRouter();

function testParams(){
  // params传参必须使用组件的name
  router.push({
    name:'Haha',
  params:{
      id:888,
      name:'zhangsan222',
      age:2222
  }

  });
}


function testQuery(){
  // params传参必须使用组件的name
  router.push({
    path:'/hello',
    query:{
      id:888,
      name:'zhangsan222',
    }
  });
}

</script>

<template>
  <!--  a链接不再使用-->
  <!--<a href="/">首页</a>-->
  <!--  <a href="/hello">hello</a>-->
  <!--  <a href="/haha">哈哈</a>-->

  <router-link to="/">首页</router-link>
  <router-link to="/hello">hello</router-link>
  <router-link to="/haha/111/haha111/18">haha</router-link>
<!--  params方式传参传对象-->
  <router-link :to="{
  name: 'Haha', //只能写name
  params: {
    id:777,
    name:'zhangsan',
    age:22
  }
  }">hahaPrarmsTo</router-link>
  <button @click="testParams">params传参</button>

  <router-link to="/hello?id=1&name=zhao">param传</router-link>
  <router-link :to="{
    path:'/hello',//path或者name都行
    query:{id:88119,name:'zha',age:2222}

  }">param传2</router-link>
  <button @click="testQuery">query传参</button>


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
