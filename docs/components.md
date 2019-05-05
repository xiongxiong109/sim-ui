组件基本分为**基础组件**与**高级组件**, 基础组件会全量加载, 而高级组件需要单独按需引入。

# 基础组件 #

引入方式:
```javascript
	import Vue from 'vue'
	import SimUI from 'sim-ui' // 引入基础核心模块
	import 'sim-ui/dist/main.css' // 引入主要css文件
	
	Vue.use(SimUI); // 安装sim-ui
```

列表如下:
## Switch ##
> 开关组件, 仿IOS原生Switch

使用示例:

```
<template>
	<sm-switch v-model="isOpen"></sm-switch>
</template>
<script>
	export default {
		data() {
			return {
				isOpen: false
			}
		}
	}
</script>
```

属性:

|    名字	 |    类型 	 |   默认值	 | 说明 								    |
|:----------:|:---------:|:---------:|:------------------------------------:|
| value  	 | `boolean` | `false`   | 通过`v-model`双向绑定，同步更新状态 	    |
| isDisabled | `boolean` | `false`	 | 是否禁止点击						    |