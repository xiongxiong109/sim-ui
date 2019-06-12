## Switch ##
> 开关组件, 仿IOS原生Switch

使用示例:
```javascript
  <sm-switch
    v-model="isOpenSwitch"
    :isDisabled="isDisabled"
  />
```

属性:

|    名字	 |    类型 	 |   默认值	 |  是否必填 |   说明 								    |
|:----------:|:---------:|:---------:|:----:|--------------------------------:|
| value  	 | `boolean` | `false`   | 否 | 通过`v-model`双向绑定，同步更新状态 	    |
| isDisabled | `boolean` | `false`	 | 否 | 是否禁止点击						    |