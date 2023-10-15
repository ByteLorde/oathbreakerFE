<template>
  <div class="component-root flex px-3 py-3 align-items-center" v-if="user">
    <div class="avatar-container flex align-items-center">
      <img class="avatar" :src="user?.icon" alt="">
      <div class="online-bubble online"></div>
    </div>

    <div class="flex-column flex pl-2">
      <span class="name">{{user.name}}</span>
      <span class="title">{{user.title}}</span>

    </div>

  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "FriendDisplay",
  props: [
      'user'
  ]
})
</script>

<style scoped lang="scss">
.component-root {
  cursor: pointer;
  transition: background-color 200ms ease;
  //border-radius: 8px;
  &:hover {
    background: #333;
  }
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50px;
  border: 2px double #444;

}

.avatar-container {
  position: relative;
}

.name {
  font-weight: bold;
  font-size: 1.1em;
}

.title {
  font-size: .8em;
  opacity: .75;
}
.online-bubble {
  content: ' ';
  width: 13px;
  height: 13px;
  border: 1px solid #555;
  border-radius: 50px;
  position: absolute;
  bottom: 0;
  right: 0;

  &.online {
    background: greenyellow;
  }

  &.offline {
    background: #444;
  }
}
</style>