<template>
    <div>
        <div>
            <p>基础用法</p>
            <el-input-number size="medium" v-model="num1"  :min="1" :max="10" label="描述文字"></el-input-number>
            <p>禁用状态</p>
             <el-input-number size="small" v-model="num2" :disabled="true"></el-input-number>
             <p>设置步长（当前步长为2）</p>
             <el-input-number size="mini" v-model="num3" :step="2"></el-input-number>
             <p>精度(当前精度为2)</p>
             <el-input-number v-model="num9" :precision="2" :step="0.1" :max="10"></el-input-number>
             <p>按钮位置</p>
             <el-input-number v-model="num8" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
        </div>
    </div>
</template>

<script>
    export default {
        name: "InputNumber",
        data(){
            return {
                num1: 1,
                num2: 2,
                num3:3,
                num9:7,
                num8:3,
            }
        }
    }
</script>

<style scoped>

</style>
