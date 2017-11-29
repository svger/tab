# Tabs
> 选项卡切换组件

## API

### Tabs

| 参数       | 说明             |  类型       | 默认值 |
| :---------: | :----------------: | :---------: | :----: |
| activeKey | 当前激活`tab`面板的`key` | string    | 无 |
| defaulActiveKey | 初始化激活`tab`面板的`key` | string    | 无 |
| onChange | 切换面板的回调 | function    | () => {} |
| prefixCls | 样式前缀，如：`cefc-tabs`，可用于自定义样式 | string   | `cefc-tabs` |
| children  | 子元素 | React.Element | 无 |

### Tabs.TabPane

| 参数       | 说明             |  类型       | 默认值 |
| :---------: | :----------------: | :---------: | :----: |
| key | 对应`activeKey` | string    | 无 |
| tab | 选项卡头显示文字 | string &#124; React.Element    | 无 |