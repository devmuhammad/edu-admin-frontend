<template>

  <div id="app">
  <Navbar/>
    <section class="section">
      <div class="container">
        <userInfo/>
        <mainTab/>
        <span class="card">
          <router-view/>
        </span>
      </div>
    </section>  
  </div>
</template>

<script>
import Navbar from "@/components/navbar/navbar";
import mainTab from "@/components/tabs/mainTab"
import userInfo from "@/components/userInfo/userInfo"
import login from '@/components/login/login'

export default {
  name: 'app',
  components:{Navbar,mainTab,userInfo,login}
}
</script>


<style rel="stylesheet" src="./assets/css/font-awesome.min.css"></style>
<style lang="sass"> @import "./assets/sass/app.scss"; </style>
<style src="./assets/css/app.css"></style>
