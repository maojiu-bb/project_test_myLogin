<template>
  <div class="courses-container">
    <div class="course">
      <!-- 左侧 -->
      <div class="leftTabBar">
        <ul>
          <li>
            <router-link to="/home/courses/frontEnd">前端</router-link>
          </li>
          <li>
            <router-link to="/home/courses/rearEnd">后端</router-link>
          </li>
          <li>
            <router-link to="/home/courses/bigData">python+大数据</router-link>
          </li>
          <li>
            <router-link to="/home/courses/ai">python+人工智能</router-link>
          </li>
          <li>
            <router-link to="/home/courses/softwareTest">前软件测试</router-link>
          </li>
        </ul>
      </div>
      <!-- 右侧 -->
      <div class="rightShow">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
.courses-container {
  padding: 10px;
  .course {
    display: flex;
    .leftTabBar {
      flex: 3;
      // background-color: pink;
      border: 1px solid #ccc;
      li {
        list-style: none;
        display: block;
        height: 50px;
        text-align: center;
        line-height: 50px;
        font-size: 14px;
        cursor: pointer;
        a {
          display: block;
          width: 100%;
          height: 100%;
          text-decoration: none;
          color: #000;
    }
      }
      li:hover {
        background-color: #eee;
      }
    }
    .rightShow {
      flex: 7;
    }
  }
  .router-link-active {
    position: relative;
    background-color: #efefef;
  }
  .router-link-active::before {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    width: 5px;
    height: 50px;
    background-color: orange;
  }
}
</style>