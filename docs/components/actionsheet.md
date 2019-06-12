## ActionSheet ##
> 底部弹出ActionSheet

使用示例:

```javascript
  <sm-actionsheet
    :is-show="isShowAction"
    :list="actionList"
    @click-item="evtClickActionItem"
    @hide="isShowAction = false"
  />
```

属性

| 名字 | 类型 | 默认值 | 是否必填 | 说明 |
|:----:|:----:|:----:|:----:|:----: |
| isShow | `Boolean` | `false` | 否 | 是否显示ActionSheet |
| list| `Array<IActionItem>` | [] | 否 | `IActionItem`数组 |
| click-item | `function` | `null` | 是 | 点击元素回调方法 |
| hide | `function`| `null` | 是 | 关闭回调 |

```javascript
  interface IActionItem {
    nm: string; // 元素名称
    id: number; // 元素唯一id
  }
```
