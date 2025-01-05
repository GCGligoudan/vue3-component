# Icon 图标组件

z-ui 推荐使用xicons作为图标库

```
$pnpm install @vicons/ionicons5
```

## 使用图标

- 如果你想像用例一样直接使用，你需要全局注册组件，才能够直接在项目里使用

<script setup lang='ts'>
  import { CashOutline } from '@vicons/ionicons5'
</script>
<z-icon color="red" :size="40">
  <CashOutline />
</z-icon >
<z-icon color="red" size="20" >
  <CashOutline />
</z-icon >
<z-icon color="green" size="40" >
  <CashOutline />
</z-icon >
<z-icon color="blue" size="40" >
  <CashOutline />
</z-icon >

```vue
<script setup lang='ts'>
  import { CashOutline } from '@vicons/ionicons5'
</script>
<template>
  <z-icon color="red" size="40" />
    <CashOutline />
  <z-icon />
</template>
```

## API

### Icon Props

| 参数 | 说明 | 类型 | 默认值 |
| ------ | -----  | ------ | ------ | 
| color | 图标颜色 | `string` | `#333` |
| size | 图标大小 | `number`\|`string` | `24` |