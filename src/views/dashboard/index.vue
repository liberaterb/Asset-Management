<template>
  <div class="dashboard">
    <div style="margin-top: 30px;text-align:center;margin-bottom: 30px;"><h1>
      固定资产管理系统
    </h1> <small>
      从购置、领用、盘点、借用归还、维修到报废进行全方位准确监管，以“快捷”、“精准”和功能全面为优势的管理类系统.
    </small></div>

    <div style="display:flex;">
      <el-card style="margin-left: 30px;width: 506px;" shadow="never">
        <template v-slot:header>
          <div style="display:flex; align-items: center;">
            <div style="width: 100%">
              <span>计算机类</span>
            </div>
            <el-tag style="height: 24px;line-height: 22px;">2021-02-06</el-tag>
          </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">
          {{ "列表内容 " + o }}
        </div>
      </el-card>

      <el-card style="margin-left: 30px;width: 506px;" shadow="never">
        <template v-slot:header>
          <div>
            <span>租借</span>
          </div>
        </template>
        <div>
          <i class="el-icon-plus" />
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  computed: {}
}
</script>

<style lang="scss">
</style>
