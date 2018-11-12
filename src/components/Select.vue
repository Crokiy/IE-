<template>
    <div>
        <div>
            <p>用法:
                <br> 1.clearable用于清空单选
                <br> 2.disabled设置为true则禁用
            </p>
            <template>
                <el-select clearable v-model="value" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :disabled="item.disabled" :value="item.value">
                    </el-option>
                </el-select>
            </template>
        </div>
        <div>
            <p>
                <br> 多选 设置multiple属性即可启用多选,默认情况下选中值会以 Tag 的形式展现，设置collapse-tags属性将它们合并为一段文字
            </p>
            <template>
                <el-select v-model="value5" multiple placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>

                <el-select v-model="value11" multiple collapse-tags style="margin-left: 20px;" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </template>
        </div>
        <div>
            <p>
                自定义模板：
                <template>
                    <el-select v-model="value6" multiple placeholder="请选择">
                        <el-option v-for="item in cities" :key="item.value" :label="item.label" :value="item.value">
                            <span style="float: left">{{ item.label }}</span>
                            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
                        </el-option>
                    </el-select>
                </template>
            </p>
        </div>
        <div>
            <p>分组</p>
            <el-select v-model="value7" placeholder="请选择">
                <el-option-group v-for="group in options3" :key="group.label" :label="group.label">
                    <el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-option-group>
            </el-select>
        </div>
        <div>
            <p>可搜索<br>为el-select添加filterable属性即可启用搜索功能,默认情况下，Select 会找出所有label属性包含输入值的选项,如果希望使用其他的搜索逻辑，可以通过传入一个filter-method来实现。filter-method为一个Function，它会在输入值发生变化时调用，参数为当前输入值。</p>
            <el-select v-model="value8" filterable placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
        </div>
        <div>
            <p>创建条目</p>
            <el-select v-model="value10" multiple filterable allow-create default-first-option placeholder="请选择文章标签">
                <el-option v-for="item in options5" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
        </div>
    </div>
</template>

<script>
export default {
  name: "Select",
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶",
          disabled: true
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      cities: [
        {
          value: "Beijing",
          label: "北京"
        },
        {
          value: "Shanghai",
          label: "上海"
        },
        {
          value: "Nanjing",
          label: "南京"
        },
        {
          value: "Chengdu",
          label: "成都"
        },
        {
          value: "Shenzhen",
          label: "深圳"
        },
        {
          value: "Guangzhou",
          label: "广州"
        }
      ],
      options3: [
        {
          label: "热门城市",
          options: [
            {
              value: "Shanghai",
              label: "上海"
            },
            {
              value: "Beijing",
              label: "北京"
            }
          ]
        },
        {
          label: "城市名",
          options: [
            {
              value: "Chengdu",
              label: "成都"
            },
            {
              value: "Shenzhen",
              label: "深圳"
            },
            {
              value: "Guangzhou",
              label: "广州"
            },
            {
              value: "Dalian",
              label: "大连"
            }
          ]
        }
      ],
      value7: "",
      value6: "",
      value: "",
      value5: [],
      value11: [],
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value8: "",
      options5: [{
          value: 'HTML',
          label: 'HTML'
        }, {
          value: 'CSS',
          label: 'CSS'
        }, {
          value: 'JavaScript',
          label: 'JavaScript'
        }],
        value10: []
    };
  }
};
</script>

<style scoped>
</style>
