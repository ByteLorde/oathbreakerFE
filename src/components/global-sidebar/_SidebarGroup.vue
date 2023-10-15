<template>
  <div class="item p-4 flex align-items-center" v-for="item of sidebarStore.items">
    <i class="item-icon pr-3 pi" :class="item.icon"></i>
    <span class="item-label">{{item.label}}</span>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "_SidebarGroup",
  props: [
      'group'
  ]
})
</script>

<style scoped lang="scss">
.item {
  cursor: pointer;
  transition: background-color 250ms ease;
  border-radius: 8px;

  &:hover {
    background: #282828;
  }
}
</style>