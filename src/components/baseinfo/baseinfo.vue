<template>
  <el-table :data="tableData" border style="width: 100%;height: 100%;">
    <el-table-column fixed prop="date" label="日期" width="150"></el-table-column>
    <el-table-column prop="name" label="姓名" width="120"></el-table-column>
    <el-table-column prop="sex" label="性别" width="120"></el-table-column>
    <el-table-column prop="tel" label="电话" width="120"></el-table-column>
    <el-table-column prop="weixin" label="微信" width="300"></el-table-column>
    <el-table-column prop="email" label="邮箱" width="120"></el-table-column>
    <el-table-column fixed="right" label="操作" width="100">
      <template slot-scope="scope">
        <el-button @click="handleEdit(scope.row)" type="text" size="small">编辑</el-button>
        <el-button type="text" size="small" @click="handleDel(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script type="text/ecmascript-6">
  import axios from 'axios'
  import {ERR_OK} from "store/constant";

  export default {
    data() {
      return {
        tableData: []
      }
    },
    mounted() {
      axios.get(this.webUrl + 'users/getUsetList').then((res) => {
        this.tableData = res.data.result
      })
    },
    methods: {
      handleEdit(row) {
        console.log(row);
      },
      handleDel(row) {
        axios.post(this.webUrl + 'users/delUserById', {userId: row['userId']}).then((res) => {
          if (res.data.code === ERR_OK) {

          }
        })
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
