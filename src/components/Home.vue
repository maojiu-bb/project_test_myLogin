<template>
  <div class="home-container">
    <!-- 首页 -->
    <!-- 头部 -->
    <Header></Header>
    <div class="info">
      <!-- 左侧的导航 -->
      <div class="info-header">
        <Aside></Aside>
      </div>
      <!-- 右侧展示区域 -->
      <div class="info-body">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import Aside from '@/components/Aside/Aside.vue'
export default {
  components: {
    Header,
    Aside
  }
}
</script>

<style lang="less" scoped>
.home-container {
  .info {
    display: flex;
    .info-header {
      flex: 2.5;
    }
    .info-body {
      flex: 7.5;
      height: 580px;
      margin: 20px;
      margin-left: 0;
      border: 2px solid #ccc;
    }
  }
}
</style>