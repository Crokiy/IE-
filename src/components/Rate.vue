<template>
    <div>
        <div Width>
            <div class="block">
                <span class="demonstration">默认不区分颜色</span>
                <el-rate v-model="value1"></el-rate>
            </div>
            <div class="block">
                <span class="demonstration">区分颜色</span>
                <el-rate v-model="value2" :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                </el-rate>
            </div>
        </div>
        <div Width>
            <p>辅助提示文字</p>
            <el-rate v-model="value3" show-text>
            </el-rate>
        </div>
        <div Width>
            <p>其他Icon</p>
            <el-rate v-model="value4" :icon-classes="['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3']" void-icon-class="icon-rate-face-off" :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
            </el-rate>
        </div>
        <div Width>
            <el-rate v-model="value5" :max="5" disabled show-score text-color="#ff9900" score-template="{value}">
            </el-rate>
        </div>
    </div>
</template>

<script>
export default {
  name: "Rate",
  data() {
    return {
      value1: null,
      value2: null,
      value3: null,
      value4: null,
      value5: 4.7
    };
  }
};
</script>

<style scoped>
</style>
