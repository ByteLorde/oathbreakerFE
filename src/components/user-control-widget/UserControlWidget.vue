<template>
  <div class="component-root" v-if="user">
    <div class="user-meta p-3 flex">
      <img class="avatar" :src="user.icon"/>
      <div class="flex flex-column pl-3">
        <span style="font-size:1.2em; font-weight:bold">Hi, {{user.name}}</span>
        <span class="author-title">
          <i class="pi pi-user m-0 pr-2" style="font-size:.75em;"></i>
          <span>{{user.title}}</span>
          <i class="pi pi-circle-fill" style="font-size: .5em"></i>
        </span>
      </div>
    </div>
<!--    <div class="top-half px-3 pb-4 flex align-items-center">-->
<!--&lt;!&ndash;      <TextArea class="input" placeholder="Share something" rows="3" autoResize></Textarea>&ndash;&gt;-->
<!--    </div>-->

    <div class="bottom-half flex align-items-center justify-content-between">
      <div class="action flex align-items-center justify-content-center cursor-pointer" style="width: 33.3%;">
        <i class="pi pi-bell pr-2"></i>
        Notifications
      </div>
      <div class="action flex align-items-center justify-content-center cursor-pointer" style="width: 33.3%;">
        <i class="pi pi-comments pr-2"></i>
        Messages
      </div>
      <div class="action flex align-items-center justify-content-center cursor-pointer" style="width: 33.3%;">
        <i class="pi pi-bitcoin pr-2"></i>
        Payouts
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import {useUserStore} from "@/stores/user";
import TextArea from "primevue/textarea";

export default defineComponent({
  name: "UserControlWidget",
  components: {
    TextArea
  },
  setup() {
    return {
      user: useUserStore().user
    }
  }
})
</script>

<style scoped lang="scss">
.component-root {
  //background: #282828;
  //border-radius: 8px;
  //border-bottom: 1px double #444;
  overflow: hidden;
}

.bottom-half {
  border-bottom: 1px solid #323232;
  border-top: 1px solid #323232;
  //border-left: 10px double #323232;
  //border-right: 10px double #323232;

}

.avatar{
  height: 45px;
  width: 45px;
  border-radius: 50px;
  border: 2px double #444;

}

.input {
  width: 100%;
}

.action {
  transition: background-color 200ms ease;
  font-weight: bold;
  display: flex;
  align-items: center;
  //flex-direction: column;
  font-size: .9em;
  padding: 14px 0;
  & > i {
    margin-bottom: -1px;
    //font-size: 1.25em
  }

  &:hover {
    background: #1E90FF;


  }

  .author-title {
    opacity: .5;
    color: white;
    font-size: .85em;
    display: flex;
    align-items: center;

    & i {
      margin: 2px 7px 0;
    }
  }
}
</style>