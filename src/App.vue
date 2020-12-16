<template>
  <v-app>
    <div class='leftSideBarLayout'>
      <router-view name='sideMenu'></router-view>
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>
</script>

<style >
  @import './assets/scss/style.css';
</style>