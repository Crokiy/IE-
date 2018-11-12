<template>
  <div class="layout">
    <div class="class">
      <el-row>
        <el-col :span="1"><div class="grid-content bg-purple">1</div></el-col>
        <el-col :span="2"><div class="grid-content bg-purple-light">2</div></el-col>
        <el-col :span="5"><div class="grid-content bg-purple">5</div></el-col>
        <el-col :span="7"><div class="grid-content bg-purple-light">7</div></el-col>
        <el-col :span="9"><div class="grid-content bg-purple">9</div></el-col>
      </el-row>
      <el-row :gutter="50">
        <el-col :span="4"><div class="grid-content bg-purple">4</div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light">4</div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple">4</div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light">4</div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple">4</div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light">4</div></el-col>
      </el-row>
      <p>偏移布局</p>
      <el-row :gutter="20">
        <el-col :span="6" :offset="6"><div class="grid-content bg-purple">6</div></el-col>
        <el-col :span="4" :offset="3"><div class="grid-content bg-purple">4 通过偏移量(:offset的值控制便宜)</div></el-col>
      </el-row>
      <p>分栏布局</p>
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <p>响应式布局以及断点隐藏</p>
      <el-row :gutter="10">
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple hidden-lg-only"></div></el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light hidden-lg-and-up"></div></el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple hidden-sm-and-down" ></div></el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light hidden-xs-only"></div></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import 'element-ui/lib/theme-chalk/display.css'
    export default {
        name: "Layout"
    }
</script>

<style scoped lang="scss">
.layout{
  background: beige;
}
.class{
  padding:40px 0;
}
.el-row {
  margin-bottom: 20px;.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
&:last-child {
   margin-bottom: 0;
 }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
