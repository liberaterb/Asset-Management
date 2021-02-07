<template>
  <div>
    <el-card shadow="never" class="form-card">
      <el-form :model="addForm" label-width="90px">
        <el-form-item label="资产名称">
          <el-input v-model="addForm.name" />
        </el-form-item>
        <div class="hr-line-dashed" />
        <el-form-item label="价格">
          <el-input v-model="addForm.price" />
        </el-form-item>
        <div class="hr-line-dashed" />
        <el-form-item label="类型">
          <el-select v-model="addForm.category" placeholder="请选择">
            <el-option
              v-for="item in options.categoryOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <div class="hr-line-dashed" />
        <el-form-item label="所属网点">
          <el-select v-model="addForm.outlet" placeholder="请选择">
            <el-option
              v-for="item in options.outletOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <div class="hr-line-dashed" />
        <el-form-item label="资产编号" style="margin-bottom: 0px">
          <el-input v-model="addForm.no" />
        </el-form-item>
        <div style="color: rgb(115, 115, 115);font-size: 13px;margin-bottom: 20px;margin-left: 290px;margin-top: 7px;">资产编号是由用户提供的，便于系统内部uuid编号丢失时，定位物品，因此请尽量保持其唯一性.</div>
        <div class="hr-line-dashed" />
        <div style="padding-left: 300px;">
          <el-button type="success">提交</el-button>
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'AssetAdd',
  data() {
    return {
      addForm: {
        name: '',
        price: '',
        category: '',
        outlet: '',
        no: ''
      },
      options: {
        categoryOptions: [],
        outletOptions: []
      }
    }
  }
}
</script>

<style lang="scss">
.form-card {
  margin: 23px;
  .el-card__body {
    padding-bottom: 35px;
  }
  .el-form-item {
    padding-left: 200px;
    .el-select{
      width: 100%;
    }
  }
  .hr-line-dashed {
    border-top: 1px dashed #e7eaec;
    color: #ffffff;
    background-color: #ffffff;
    height: 1px;
    margin: 20px 0;
  }
}
</style>
