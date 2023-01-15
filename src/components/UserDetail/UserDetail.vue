<template>
  <div class="userDetail-container">
    <div class="userDetail">
      <button class="back" @click="back">返回</button>
      <h1>详情信息 --- {{ id }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  methods: {
    back() {
      this.$router.back(1)
    }
  }
}
</script>

<style lang="less" scoped>
.userDetail-container {
  .userDetail {
    position: relative;
    .back {
      position: absolute;
      right: 10px;
      top: 10px;
      width: 60px;
      height: 30px;
      border: 0;
      border-radius: 5px;
      cursor: pointer;
    }
    .back:hover {
        background-color: orange;
      }
  }
}
</style>