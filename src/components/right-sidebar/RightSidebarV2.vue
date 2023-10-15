<template>
  <div class="sidebar-root">
    <div class="featured-items-container">
<!--      <UserControlWidget></UserControlWidget>-->
    <FeaturedItemsWidget></FeaturedItemsWidget>
    </div>

    <div class="friends-list">
      <div class="friend-list-header">
        <span class="showing-title">Contacts <i class="pi pi-chevron-down"></i></span>
        <span class="list-number">{{onlineFriends.length}}</span>
      </div>
      <FriendDisplay v-for="friend of onlineFriends" :user="friend"></FriendDisplay>
    </div>

  </div>
</template>

<script>
import {defineComponent} from "vue";
import {useFriendStore} from "../../stores/friends";
import FriendDisplay from "@/components/right-sidebar/_FriendDisplay.vue";
import FeaturedItemsWidget from "@/components/featured-items-widget/FeaturedItemsWidget.vue";
import UserControlWidget from "@/components/user-control-widget/UserControlWidget.vue";

export default defineComponent({
  name: "RightSidebarV2",
  components: {
    UserControlWidget,
    FeaturedItemsWidget,
    FriendDisplay
  },
  setup() {
    return {
      friends: useFriendStore().fetchFriends()
    }
  },
  computed: {
    onlineFriends() {
      return this.friends.filter(friend => friend.online);
    },
    offlineFriends() {
      return this.friends.filter(friend => !friend.online);
    }
  }
})
</script>

<style scoped lang="scss">

.list-number {
  font-size: .9em
}

.showing-title {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1em;
  font-weight: bold;
  letter-spacing: .5px;

  & > i {
    font-size: .75em;
    margin-left: 5px;
    margin-top: 3px;
  }
}
.friend-list-header {
  //padding: 5px 15px;
  font-weight: bold;
  padding: 10px 10px 0px 0;
  font-size: 1em;
  //background: #202020;
  border-top: 1px solid #444;
  display: flex;
  justify-content: space-between;
}

.sidebar-root {
  //background: #222;
  //background: rgba(80, 80, 80, .25);
  backdrop-filter: blur(3px);
  height: 100%;
  display: flex;
  flex-direction: column;
  //border-left: 1px solid #444;
  //font-size: .9em;

  & > * {
    flex-grow: 1;
  }
}

.friends-list{
  //background: #161616;
  //border: 2px double #444;
  //border-radius: 8px;
}

.list-header {
  border-bottom: 1px solid #444;
  font-size: 1.1em;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 5px;
  margin-bottom: 10px;
}
.group {
  padding-bottom: 15px;
}

.item {
  cursor: pointer;
  transition: background-color 250ms ease;
  border-radius: 8px;

  &:hover {
    background: #282828;
  }
}

.group-label {
  font-weight: bold;
}
hr {
  margin-top: 5px;
}
</style>