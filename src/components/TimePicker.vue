<template>
    <div>
        <div>
            <p>固定时间点</p>
            <el-time-select v-model="value1" :picker-options="{
                    start: '09:30',//起始时间
                    step: '00:15',//步长
                    end: '20:30'//结束时间
                }" placeholder="选择时间">
            </el-time-select>
        </div>
        <div>
            <p>固定时间范围</p>
            <template>
                <el-time-select placeholder="起始时间" v-model="startTime" :picker-options="{
                    start: '08:30',
                    step: '00:15',
                    end: '20:30'
                }">
                </el-time-select>
                <el-time-select placeholder="结束时间" v-model="endTime" :picker-options="{
                    start: '08:30',
                    step: '00:15',
                    end: '20:30',
                    minTime: startTime
                }">
                </el-time-select>
            </template>
        </div>
        <div>
            <p>任意时间范围</p>
            <template>
                <el-time-picker is-range v-model="value4" range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" placeholder="选择时间范围">
                </el-time-picker>
                <el-time-picker is-range arrow-control v-model="value5" range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" placeholder="选择时间范围">
                </el-time-picker>
            </template>
        </div>
    </div>
</template>

<script>
export default {
  name: "TimePicker",
  data() {
    return {
      value1: "",
      startTime: "",
      endTime: "",
      value4: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
      value5: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
    };
  }
};
</script>

<style scoped>
</style>
