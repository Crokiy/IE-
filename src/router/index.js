import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Layout from '../components/Layout'
import Container  from '../components/Container'
import Icon from '../components/Icon'
import Radio from '../components/Radio'
import Inputnum from '../components/InputNumber'
import Select from '../components/Select'
import Cascader from '../components/Cascader'
import Slider from '../components/Slider'
import TimePicker from '../components/TimePicker'
import DatePicker from '../components/DatePicker'
import Upload from '../components/upload'
import Rate from '../components/Rate'
import ColorPicker from '../components/ColorPicker'
import Transfer from '../components/Transfer'
import Form from '../components/Form'
import Table from '../components/Table'
import Tag from '../components/Tag'
import Progress from '../components/Progress'
import Tree from '../components/Tree'
import Pagination from '../components/Pagination'
import Badge from '../components/Badge'
import Alert from '../components/Alert'
import Loading from '../components/Loading'
import Message from '../components/Message'
import MessageBox from '../components/MessageBox'
import Notification from '../components/Notification'
import NavMenu from '../components/NavMenu'
import Tabs from '../components/Tabs'
import Breadcrumb from '../components/Breadcrumb'
import Dropdown from '../components/Dropdown'
import Steps from '../components/Steps'

import Dialog from '../components/Dialog'
import Tooltip from '../components/Tooltip'
import Popover from '../components/Popover'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import Collapse from '../components/Collapse'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path:'/layout',
      component: Layout
    },
    {
      path:'/container',
      component: Container
    },
    {
      path:'/icon',
      component: Icon
    },
    {
      path:'/radio',
      component: Radio
    },
    {
      path:'/inputnum',
      component: Inputnum
    },
    {
      path:'/select',
      component:Select
    },
    {
      path:'/cascader',
      component:Cascader
    },
    {
      path:'/slider',
      component: Slider
    },
    {
      path:'/TimePicker',
      component: TimePicker
    },{
      path:'/datepicker',
      component:DatePicker
    },{
      path:'/upload',
      component:Upload
    },{
      path:'/rate',
      component:Rate
    },{
      path:'/colorpicker',
      component:ColorPicker
    },{
      path:'/transfer',
      component:Transfer
    },{
      path:'/form',
      component:Form
    },
    {
      path:'/table',
      component:Table
    },
    {
      path:'/tag',
      component:Tag
    },{
      path:'/progress',
      component:Progress
    },
    {
      path:'/tree',
      component:Tree
    },
    {
      path:'/pagination',
      component:Pagination
    },
    {
      path:'/badge',
      component:Badge
    },
    {
      path:'/alert',
      component:Alert
    },
    {
      path:'/loading',
      component:Loading
    },
    {
      path:'/message',
      component:Message
    },
    {
      path:'/messagebox',
      component:MessageBox
    },
    {
      path:'/notification',
      component:Notification
    },

    {
      path:'/navmenu',
      component:NavMenu
    },{
      path:'/tabs',
      component:Tabs
    },{
      path:'/breadcrumb',
      component:Breadcrumb
    },{
      path:'/Dropdown',
      component:Dropdown
    },{
      path:'/steps',
      component:Steps
    },

    {
      path:'/dialog',
      component:Dialog
    },{
      path:'/tooltip',
      component:Tooltip
    },{
      path:'/popover',
      component:Popover
    },{
      path:'/card',
      component:Card
    },{
      path:'/Carousel',
      component:Carousel
    },{
      path:'/collapse',
      component:Collapse
    }
  ]
})
