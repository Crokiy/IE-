<template>
  <div class="navBox">
    <el-menu class="el-menu-demo" mode="horizontal" background-color="#409EFF" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="1">
        <router-link to="/">主页</router-link>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">Basic</template>
        <router-link v-for="(basic,key) in Basic" :to="basic.link" :key=key>
          <el-menu-item :index="'2-'+(key+1)">{{basic.name}}</el-menu-item>
        </router-link>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">Form</template>
        <router-link v-for="(form,key) in Form" :to="form.link" :key=key>
          <el-menu-item :index="'3-'+(key+1)">{{form.name}}</el-menu-item>
        </router-link>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">Data</template>
        <router-link  v-for="(data,key) in Data" :to="data.link" :key=key>
          <el-menu-item  :index="'4-'+(key+1)">{{data.name}}</el-menu-item >
        </router-link>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">Notice</template>
        <router-link  v-for="(notice,key) in Notice" :to="notice.link" :key=key>
          <el-menu-item  :index="'5-'+(key+1)">{{notice.name}}</el-menu-item >
        </router-link>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">Navigation</template>
        <router-link  v-for="(navigation,key) in Navigation" :to="navigation.link" :key=key>
          <el-menu-item  :index="'5-'+(key+1)">{{navigation.name}}</el-menu-item >
        </router-link>
      </el-submenu>
      <el-submenu index="7">
        <template slot="title">Others</template>
        <router-link  v-for="(other,key) in Others" :to="other.link" :key=key>
          <el-menu-item  :index="'5-'+(key+1)">{{other.name}}</el-menu-item >
        </router-link>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      Basic: [
        {
          name: "layout",
          link: "/layout"
        },
        {
          name: "Container",
          link: "/container"
        },
        {
          name: "Icon",
          link: "/icon"
        }
      ],
      Form: [
        {
          name: "选择框",
          link: "/radio"
        },
        {
          name: "计数器",
          link: "/inputnum"
        },
        {
          name: "选择器",
          link: "/select"
        },
        {
          name: "级联选择器",
          link: "/cascader"
        },
        {
          name: "Slider滑块",
          link: "/slider"
        },
        {
          name: "TimePicker时间选择器",
          link: "/timepicker"
        },
        {
          name: "日期选择器",
          link: "/datepicker"
        },
        {
          name: "上传",
          link: "/upload"
        },
        {
          name: "Rate评分",
          link: "/rate"
        },
        {
          name: "ColorPicker",
          link: "/colorpicker"
        },
        {
          name: "Transfer穿梭框",
          link: "/transfer"
        },
        {
          name: "Form表单",
          link: "/form"
        }
      ],
      Data:[
        {
          name:'Table表格',
          link:'/table'
        },
        {
          name:'Tag标签',
          link:'/tag'
        },
        {
          name:'Progess进度条',
          link:'/progress'
        },
        {
          name:'Tree树形控件',
          link:'/tree'
        },
        {
          name:'Pagination分页',
          link:'/pagination'
        },
        {
          name:'Badge标记',
          link:'/badge'
        }
      ],
      Notice:[
        {
          name:'Alert警告',
          link:'/alert'
        },
        {
          name:'Loading加载',
          link:'/loading'
        },
        {
          name:"Message消息提示",
          link:'/message'
        },
        {
          name:"MessageBox弹框",
          link:'/messagebox'
        },{
          name:'Notification通知',
          link:'/notification'
        }
      ],
      Navigation:[
        {
          name:'NavMenu导航菜单',
          link:'/navmenu'
        },
        {
          name:'Tabs标签页',
          link:'/tabs'
        },{
          name:'Breadcrumb面包屑',
          link:'/breadcrumb'
        },{
          name:'Dropdown下拉菜单',
          link:'/dropdown'
        },{
          name:'Steps步骤条',
          link:'/steps'
        }
      ],
      Others:[
        {
          name:'Dialog对话框',
          link:'/dialog'
        },
        {
          name:'Tooltip文字提示',
          link:'/tooltip'
        },
        {
          name:'Popover弹出框',
          link:'/popover'
        },
        {
          name:'Card卡片',
          link:'/card'
        },{
          name:'Carousel走马灯',
          link:'carousel'
        },{
          name:'Collapse折叠面板',
          link:'collapse'
        }
      ]
    };
  }
};
</script>

<style scoped>
.navBox {
  font-family: PingFang SC;
}
</style>
