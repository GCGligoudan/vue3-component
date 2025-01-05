<template>
  <i :class="bem.b()" :style="style">
    <slot />
  </i>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { createNamespace } from "@zi-shui/utils/create";
import { iconProps } from './icon';

defineOptions({
  name: "z-icon",
});
const bem = createNamespace("icon");

const props = defineProps(iconProps);

const style = computed(() => {
  if (!props.size && !props.color) return {};
  return {
    fontSize: props.size ? props.size + "px" : "inherit",
    color: props.color || "inherit",
  };
});
</script>
