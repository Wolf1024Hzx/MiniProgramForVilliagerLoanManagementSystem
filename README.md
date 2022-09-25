# MiniProgramForVilliagerLoanManagementSystem
基于uni-app村民贷小程序开发代码仓库
## 插件说明
- 图表请使用ucharts/echarts进行开发，样例在[秋云 ucharts echarts 高性能跨全端图表组件](https://ext.dcloud.net.cn/plugin?id=271)示例项目中
- 请于HBuilder插件市场下载[eslint-js](https://ext.dcloud.net.cn/plugin?id=2037)、[eslint-plugin-vue](https://ext.dcloud.net.cn/plugin?id=2005)插件，规范化开发(eslint配置已完成，插件仅作实时校验)

## 静态资源获取说明
项目静态资源，如图标，均从静态资源服务器获取，在main.js中已挂载全局函数$resourceRoute:
```javascript
Vue.prototype.$resourceRoute = function(route) {
    return 'http://106.14.200.144:8090/static/' + route
}
```
如原图片存放在@/static/xxx/.../test.svg，现在请使用如下代码调用:
```javascript
<template>
  <view>
    <image :src="getImgUrl('xxx/.../test.svg')" />
  </view>
</template>

<script>
export default {
  methods: {
    getImgUrl(url) {
      return this.$resourceRoute(url)
    }
  }
}
</script>
```
***
_特别鸣谢开发者 Wolf1024Hzx, ItBlock, 木枝_