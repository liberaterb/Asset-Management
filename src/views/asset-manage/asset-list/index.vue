<template>
  <div class="asset-list">
    <el-card shadow="never" style="margin: 20px;">
      <el-form :model="queryForm" label-width="80px" inline class="query-form">
        <el-form-item label="uuid">
          <el-input v-model="queryForm.uuid" />
        </el-form-item>
        <el-form-item label="资产编号">
          <el-input v-model="queryForm.no" />
        </el-form-item>
        <el-form-item label="名称">
          <el-input v-model="queryForm.name" />
        </el-form-item>
        <el-form-item label="类型">
          <el-select v-model="queryForm.category" placeholder="请选择" />
        </el-form-item>
        <el-form-item label="网点">
          <el-select v-model="queryForm.outlet" placeholder="请选择" />
        </el-form-item>
        <el-button type="success" plain>开启盘点</el-button>
        <el-button type="success">搜索</el-button>
      </el-form>
    </el-card>

    <el-card shadow="never" style="margin: 0 20px 20px 20px;">
      <el-table
        :data="tableData"
      >
        <el-table-column
          type="selection"
          width="55"
        />
        <el-table-column
          prop="date"
          label="序号"
          width="180"
        />
        <el-table-column
          prop="name"
          label="uuid"
          width="180"
        />
        <el-table-column
          prop="address"
          label="资产编号"
        />
        <el-table-column
          prop="address"
          label="名称"
        />
        <el-table-column
          prop="address"
          label="价格"
        />
        <el-table-column
          prop="address"
          label="状态"
        />
        <el-table-column
          prop="address"
          label="操作"
        />
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next, jumper"
        :total="1000"
        style="margin-top: 20px;display: flex;justify-content: flex-end;"
      />
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'AssetList',
  data() {
    return {
      queryForm: {
        uuid: '',
        no: '',
        name: '',
        category: '',
        outlet: ''
      }
    }
  }
}
</script>

<style lang="scss">
.asset-list {
.query-form{
  .el-form-item{
    margin-bottom: 0px;
  }
}
}
</style>
