<template>
  <div class="component-root">
    <div v-for="group of sidebarStore.groups" class="group">
      <div v-if="group.label">
        <span class="group-label p-2 m-2">
          {{group.label}}
        </span>
        <hr>
      </div>
      <div class="item py-3 pl-3 flex align-items-center" v-for="item of group.items">
        <i class="item-icon pr-3 pi" :class="item.icon"></i>
        <span class="item-label">{{item.label}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import {useSidebarStore} from "@/stores/sidebar";
import {defineComponent} from "vue";

export default defineComponent({
  name: "GlobalSidebar",
  setup() {
    return {
      sidebarStore: useSidebarStore()
    }
  }
})
</script>

<style scoped lang="scss">
.group {
  padding-bottom: 15px;
}

.item {
  cursor: pointer;
  transition: all 250ms ease;
  border-radius: 8px;

  &:hover {
    background: rgba(50, 50, 50, .5);
    //backdrop-filter: blur(1px);
  }
}

.group-label {
  font-weight: bold;
}
hr {
  margin-top: 5px;
}
</style>