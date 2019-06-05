## Switch ##
> 开关组件, 仿IOS原生Switch

使用示例:

```javascript
<template>
	<sm-switch v-model="isOpen"></sm-switch>
</template>
<script>
	import { Switch } from 'sim-ui';

	export default {
		data() {
			return {
				isOpen: false
			}
		},
		components: {
			[Switch.name]: Switch
		}
	}
</script>
```

属性:

|    名字	 |    类型 	 |   默认值	 | 说明 								    |
|:----------:|:---------:|:---------:|:------------------------------------:|
| value  	 | `boolean` | `false`   | 通过`v-model`双向绑定，同步更新状态 	    |
| isDisabled | `boolean` | `false`	 | 是否禁止点击						    |