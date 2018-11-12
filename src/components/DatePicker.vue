<template>
    <div>
        <div>
            <p>选择日</p>
            <template>
                <div class="block">
                    <span class="demonstration">默认</span>
                    <el-date-picker v-model="value1" type="date" placeholder="选择日期">
                    </el-date-picker>
                </div>
                <div class="block">
                    <span class="demonstration">带快捷选项</span>
                    <el-date-picker v-model="value2" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions1">
                    </el-date-picker>
                </div>
            </template>
        </div>
        <div>
            <p>其他日期单位</p>
            <div class="container">
                <div class="block">
                    <span class="demonstration">周</span>
                    <el-date-picker v-model="value3" type="week" format="yyyy 第 WW 周" placeholder="选择周">
                    </el-date-picker>
                </div>
                <div class="block">
                    <span class="demonstration">月</span>
                    <el-date-picker v-model="value4" type="month" placeholder="选择月">
                    </el-date-picker>
                </div>
            </div>
            <div class="container">
                <div class="block">
                    <span class="demonstration">年</span>
                    <el-date-picker v-model="value5" type="year" placeholder="选择年">
                    </el-date-picker>
                </div>
                <div class="block">
                    <span class="demonstration">多个日期</span>
                    <el-date-picker type="dates" v-model="value14" placeholder="选择一个或多个日期">
                    </el-date-picker>
                </div>
            </div>
        </div>
        <div>
            <p>日期选择范围</p>
            <template>
                <div class="block">
                    <span class="demonstration">默认</span>
                    {{value6}}
                    <el-date-picker v-model="value6" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                    </el-date-picker>
                </div>
                <div class="block">
                    <span class="demonstration">带快捷选项</span>
                    <el-date-picker v-model="value7" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions2">
                    </el-date-picker>
                </div>
            </template>
        </div>
        <div style="margin-top:30px">
            <p>时间和日期选择器</p>
            <template>
                <div class="block">
                    <span class="demonstration">默认</span>
                    <el-date-picker v-model="value1" type="datetime" placeholder="选择日期时间">
                    </el-date-picker>
                </div>
                <div class="block">
                    <span class="demonstration">带快捷选项</span>
                    <el-date-picker v-model="value2" type="datetime" placeholder="选择日期时间" align="right" :picker-options="pickerOptions1">
                    </el-date-picker>
                </div>
                <div class="block">
                    <span class="demonstration">设置默认时间</span>
                    <el-date-picker v-model="value3" type="datetime" placeholder="选择日期时间" default-time="12:00:00">
                    </el-date-picker>
                </div>
            </template>
            <p style="margin-top:30px">日期和时间范围</p>
            <template>
                <div class="block">
                    <span class="demonstration">默认</span>
                    <el-date-picker v-model="value4" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                    </el-date-picker>
                </div>
                <div class="block">
                    <span class="demonstration">带快捷选项</span>
                    <el-date-picker v-model="value5" type="datetimerange" :picker-options="pickerOptions2" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" align="right">
                    </el-date-picker>
                </div>
            </template>
            <p style="margin-top:30px">默认的起始与结束时刻</p>
            <template>
                <div class="block">
                    <span class="demonstration">起始日期时刻为 12:00:00</span>
                    <el-date-picker v-model="value6" type="datetimerange" start-placeholder="开始日期" end-placeholder="结束日期" :default-time="['12:00:00']">
                    </el-date-picker>
                </div>
                <div class="block">
                    <span class="demonstration">起始日期时刻为 12:00:00，结束日期时刻为 08:00:00</span>
                    <el-date-picker size="mini" v-model="value7" type="datetimerange" align="right" start-placeholder="开始日期" end-placeholder="结束日期" :default-time="['12:00:00', '08:00:00']">
                    </el-date-picker>
                </div>
            </template>
        </div>

    </div>
</template>

<script>
export default {
  name: "DatePicker",
  data() {
    return {
      value6: "",
      value7: "",
      pickerOptions2: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      value4: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value5: "",
      pickerOptions1: {
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      value1: "",
      value2: "",
      value3: "",
      value3: "",
      value4: "",
      value5: "",
      value14: [],
      pickerOptions2: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      value6: "",
      value7: "",
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      value1: "",
      value2: ""
    };
  }
};
</script>

<style scoped>
</style>
