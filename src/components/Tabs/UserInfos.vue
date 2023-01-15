<template>
  <div class="userInfos-container">
    <div class="userInfos">
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>姓名</th>
            <th>年龄</th>
            <th>课程</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in userList" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.age }}</td>
            <td>{{ item.course }}</td>
            <td>
              <a href="#" @click.prevent="gotoDetail(item.id)">详情</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userList: [
        { id: 1, name: '猫九', age: 18, course: 'Vue' },
        { id: 2, name: '彬哥', age: 20, course: 'Ajax' },
        { id: 3, name: 'pink', age: 18, course: 'JavaScript' },
        { id: 4, name: '大佬高', age: 28, course: 'React' },
        { id: 5, name: '阿玮', age: 28, course: 'Java' },
      ]
    }
  },
  methods: {
    gotoDetail(id) {
      this.$router.push('/home/userDetail/' + id)
    }
  }
}
</script>

<style lang="less" scoped>
.userInfos-container {
  a {
    text-decoration: none;
    color: brown;
  }
  .userInfos {
    width: 100%;
    table {
      padding: 5px;
      width: 100%;
      text-align: center;
      border-spacing: 0;
      tr {
        height: 45px;
      }
      th,td {
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
      }
      th:first-child,
      td:first-child {
        border-left: 1px solid #ccc;
      }
      thead {
        background-color: #eee;
      }
      tbody {
        tr:hover {
          background-color: #efefef;
        }
      }
    }
  }
}
</style>