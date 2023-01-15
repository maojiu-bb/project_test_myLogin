<template>
  <div class="aside-container">
    <div class="aside">
      <ul>
        <li>
          <router-link to="/home/userInfos">用户信息</router-link>
        </li>
        <li>
          <router-link to="/home/courses">课程分类</router-link>
        </li>
        <li>
          <router-link to="/home/fineWorks">黑马精品</router-link>
        </li>
        <li>
          <router-link to="/home/settings">系统设置</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.aside-container {
  .aside {
    margin: 20px;
    border: 2px solid #ccc;
    ul li {
      list-style: none;
      display: block;
      width: 100%;
      height: 50px;
      text-align: center;
      line-height: 50px;
      a {
        display: block;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: #000;
      }
    }
    ul li:hover {
      background-color: #eee;
      cursor: pointer;
    }
    // 路由选中高亮
    .router-link-active {
      position: relative;
      background-color: #efefef;
    }
    .router-link-active::before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      width: 5px;
      height: 50px;
      background-color: yellowgreen;
    }
  }
}
</style>