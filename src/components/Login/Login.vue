<template>
  <div class="login-container">
    <!-- 登录组件 -->
    <div class="login">
      <h3>后台管理系统</h3>
      <div class="iptGroup">
        <input type="text" id="username" placeholder="请输入用户名" v-model="username">
        <input type="password" id="password" placeholder="请输入密码" v-model.number="password">
      </div>
      <div class="btnGroup">
        <button class="btnReset" @click="reset">重置</button>
        <button class="btnLogin" @click="login">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    reset() {
      this.username = ''
      this.password = ''
    },
    login() {
      if (this.username === 'maojiu' && this.password === 666666) {
        localStorage.setItem('token', 'Bearer xxxx')
        this.$router.push('/home')
      } else {
        alert('用户名或密码错误！')
      }
    }
  },
  created() {
    document.querySelector('body').style.backgroundColor = 'rgba(0, 0, 0, .2)'
  },
  destroyed() {
    document.querySelector('body').style.backgroundColor = ''
  }
}
</script>

<style lang="less" scoped>
.login-container {
  .login {
    width: 400px;
    height: 250px;
    background-color: #fff;
    border-radius: 50px;
    text-align: center;
    margin: 200px auto;
    h3 {
      padding-top: 30px;
      font-size: 20px;
      margin-bottom: 40px;
    }
    input {
      display: block;
      margin: 20px auto;
      padding-left: 5px;
      width: 200px;
      height: 20px;
    }
    button {
      margin: 0 10px;
      cursor: pointer;
      width: 60px;
      height: 30px;
      border-radius: 5px;
      border: 0;
    }
    button:hover {
      background-color: orange;
    }
  }
}

</style>