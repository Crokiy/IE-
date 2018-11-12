<template>
    <div>
        <div FromBorder Width>
            <p>线性进度条-百分比外线</p>
            <el-progress :percentage="0"></el-progress>
            <el-progress :percentage="70"></el-progress>
            <el-progress :percentage="80" color="#8e71c7"></el-progress>
            <el-progress :percentage="100" status="success"></el-progress>
            <el-progress :percentage="50" status="exception"></el-progress>
        </div>
        <div FromBorder Width>
            <p>线性进度条-百分比内显</p>
            <el-progress :text-inside="true" :stroke-width="18" :percentage="0"></el-progress>
            <el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
            <el-progress :text-inside="true" :stroke-width="18" :percentage="80" color="rgba(142, 113, 199, 0.7)"></el-progress>
            <el-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>
            <el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress>
        </div>
        <div FromBorder>
            <p>环形进度条</p>
            <el-progress type="circle" :percentage="0"></el-progress>
            <el-progress type="circle" :percentage="25"></el-progress>
            <el-progress type="circle" :percentage="80" color="#8e71c7"></el-progress>
            <el-progress type="circle" :percentage="100" status="success"></el-progress>
            <el-progress type="circle" :percentage="60" status="exception"></el-progress>
        </div>
    </div>
</template>

<script>
export default {
  name: "Progress"
};
</script>

<style scoped>
[Width] {
  width: 600px;
}
</style>
