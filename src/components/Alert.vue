<template>
    <div>
        <div FromBorder>
            <p>基本用法 - 非浮动元素，四种主题</p>
            <el-alert title="成功提示的文案" type="success">
            </el-alert>
            <el-alert title="消息提示的文案" type="info">
            </el-alert>
            <el-alert title="警告提示的文案" type="warning">
            </el-alert>
            <el-alert title="错误提示的文案" type="error">
            </el-alert>
        </div>
        <div FromBorder>
            <p>自定义关闭按钮</p>
            <el-alert title="不可关闭的 alert" type="success" :closable="false">
            </el-alert>
            <el-alert title="自定义 close-text" type="info" close-text="知道了">
            </el-alert>
            <el-alert title="设置了回调的 alert" type="warning" close-text="弹出框" @close="hello">
            </el-alert>
        </div>
        <div FromBorder>
            <p>带有icon</p>
            <el-alert title="成功提示的文案" type="success" show-icon>
            </el-alert>
            <el-alert title="消息提示的文案" type="info" show-icon>
            </el-alert>
            <el-alert title="警告提示的文案" type="warning" show-icon>
            </el-alert>
            <el-alert title="错误提示的文案" type="error" show-icon>
            </el-alert>
        </div>
        <div FromBorder>
            <p>文字居中</p>
            <el-alert title="成功提示的文案" type="success" center show-icon>
            </el-alert>
            <el-alert title="消息提示的文案" type="info" center show-icon>
            </el-alert>
            <el-alert title="警告提示的文案" type="warning" center show-icon>
            </el-alert>
            <el-alert title="错误提示的文案" type="error" center show-icon>
            </el-alert>
        </div>
        <div FromBorder>
            <p>带有辅助性文字介绍</p>
            <el-alert title="带辅助性文字介绍" type="success" description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……">
            </el-alert>
        </div>
        <div FromBorder>
            <p>带有icon和辅助性文字介绍</p>
            <el-alert title="成功提示的文案" type="success" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon>
            </el-alert>
            <el-alert title="消息提示的文案" type="info" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon>
            </el-alert>
            <el-alert title="警告提示的文案" type="warning" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon>
            </el-alert>
            <el-alert title="错误提示的文案" type="error" description="文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明" show-icon>
            </el-alert>
        </div>
    </div>
</template>
<script>
export default {
  methods: {
    hello() {
      alert("Hello World!");
    }
  }
};
</script>
<style scoped>
.el-alert {
  margin-top: 20px;
}
</style>
