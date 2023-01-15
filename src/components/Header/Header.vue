<template>
  <div class="header-container">
    <!-- 头部组件 -->
    <div class="header">
      <!-- 左侧logo -->
      <div class="logo">
        <img src="@/assets/heima.png" alt="">
      </div>
      <!-- 右侧退出登录按钮 -->
      <div class="reset">
        <button class="btnLogout" @click="logout">退出登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem('token')
      this.$router.replace('/login')
    }
  }
}
</script>

<style lang="less" scoped>
.header-container {
  .header {
    height: 80px;
    border-bottom: 2px solid #ccc;
    .logo {
      float: left;
      width: 250px;
      height: 80px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .reset {
      float: right;
      margin: 40px 20px 0 0;
      .btnLogout {
        width: 100px;
        height: 30px;
        background-color: #eee;
        border: 0;
        border-radius: 5px;
        cursor: pointer;
      }
      .btnLogout:hover {
        background-color: orange;
      }
    }
  }
}
</style>