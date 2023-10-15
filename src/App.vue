<script setup lang="ts">
import { RouterView } from 'vue-router'
import GlobalHeader from "@/components/global-header/GlobalHeader.vue";
import GlobalSidebar from "@/components/global-sidebar/GlobalSidebar.vue";
import RightSidebar from "@/components/right-sidebar/RightSidebar.vue";
import RightSidebarV2 from "@/components/right-sidebar/RightSidebarV2.vue";
</script>

<template>
  <div class="app-root grid">
    <div class="col-12 p-0 shadow-bottom">
      <GlobalHeader></GlobalHeader>
    </div>
    <div class="col-3 p-0">
<!--      <GlobalSidebar></GlobalSidebar>-->
      <RightSidebar></RightSidebar>

    </div>
    <div class="col-6 px-8" style="max-height: calc(100vh - 75px); overflow-y: auto">
      <RouterView />
    </div>
    <div class="col-3 p-0">
<!--      <RightSidebar></RightSidebar>-->
      <RightSidebarV2></RightSidebarV2>
    </div>
  </div>

</template>

<style lang="scss">
* {
  word-spacing: .1em;
  line-height: 1.3;
}
.app-root {
  margin: 0!important;
  //background:
  //    radial-gradient(farthest-side at -33.33% 50%,#0000 52%,#282828 54% 57%,#0000 59%) 0 calc(56px/2),
  //    radial-gradient(farthest-side at 50% 133.33%,#0000 52%,#282828 54% 57%,#0000 59%) calc(56px/2) 0,
  //    radial-gradient(farthest-side at 133.33% 50%,#0000 52%,#282828 54% 57%,#0000 59%),
  //    radial-gradient(farthest-side at 50% -33.33%,#0000 52%,#282828 54% 57%,#0000 59%),
  //    #111111;
  //background-size: calc(56px/4.667) 56px,56px calc(56px/4.667);

  //background:
  //    radial-gradient(35.36% 35.36% at 100% 25%,#0000 66%,#282828 68% 70%,#0000 72%) 14px 14px/calc(2*14px) calc(2*14px),
  //    radial-gradient(35.36% 35.36% at 0    75%,#0000 66%,#282828 68% 70%,#0000 72%) 14px 14px/calc(2*14px) calc(2*14px),
  //    radial-gradient(35.36% 35.36% at 100% 25%,#0000 66%,#282828 68% 70%,#0000 72%) 0 0/calc(2*14px) calc(2*14px),
  //    radial-gradient(35.36% 35.36% at 0    75%,#0000 66%,#282828 68% 70%,#0000 72%) 0 0/calc(2*14px) calc(2*14px),
  //    repeating-conic-gradient(#111111 0 25%,#0000 0 50%) 0 0/calc(2*14px) calc(2*14px),
  //    radial-gradient(#0000 66%,#282828 68% 70%,#0000 72%) 0 calc(14px/2)/14px 14px
  //    #111111;

  //background:
  //    radial-gradient(50% 50% at 100% 0,#282828 0%  5% ,#111111 6%  15%,#282828 16% 25%,#111111 26% 35%,#282828 36% 45%,
  //        #111111 46% 55%,#282828 56% 65%,#111111 66% 75%,#282828 76% 85%,#111111 86% 95%,
  //        #0000 96%),
  //    radial-gradient(50% 50% at 0 100%,#282828 0%  5% ,#111111 6%  15%,#282828 16% 25%,#111111 26% 35%,#282828 36% 45%,
  //        #111111 46% 55%,#282828 56% 65%,#111111 66% 75%,#282828 76% 85%,#111111 86% 95%,
  //        #0000 96%),
  //    radial-gradient(50% 50%,#282828 0%  5% ,#111111 6%  15%,#282828 16% 25%,#111111 26% 35%,#282828 36% 45%,
  //        #111111 46% 55%,#282828 56% 65%,#111111 66% 75%,#282828 76% 85%,#111111 86% 95%,
  //        #0000 96%),
  //    radial-gradient(50% 50%,#282828 0%  5% ,#111111 6%  15%,#282828 16% 25%,#111111 26% 35%,#282828 36% 45%,
  //        #111111 46% 55%,#282828 56% 65%,#111111 66% 75%,#282828 76% 85%,#111111 86% 95%,
  //        #0000 96%) 20px 20px;
  //background-size: 40px 40px;
  //background-color: #282828;

  //background:
  //    radial-gradient(50% 50% at 100% 0,#111111 0%  5% ,#282828 6%  15%,#111111 16% 25%,#282828 26% 35%,#111111 36% 45%,
  //        #282828 46% 55%,#111111 56% 65%,#282828 66% 75%,#111111 76% 85%,#282828 86% 95%,
  //        #0000 96%),
  //    radial-gradient(50% 50% at 0 100%,#111111 0%  5% ,#282828 6%  15%,#111111 16% 25%,#282828 26% 35%,#111111 36% 45%,
  //        #282828 46% 55%,#111111 56% 65%,#282828 66% 75%,#111111 76% 85%,#282828 86% 95%,
  //        #0000 96%),
  //    radial-gradient(50% 50%,#111111 0%  5% ,#282828 6%  15%,#111111 16% 25%,#282828 26% 35%,#111111 36% 45%,
  //        #282828 46% 55%,#111111 56% 65%,#282828 66% 75%,#111111 76% 85%,#282828 86% 95%,
  //        #0000 96%),
  //    radial-gradient(50% 50%,#111111 0%  5% ,#282828 6%  15%,#111111 16% 25%,#282828 26% 35%,#111111 36% 45%,
  //        #282828 46% 55%,#111111 56% 65%,#282828 66% 75%,#111111 76% 85%,#282828 86% 95%,
  //        #0000 96%) 20px 20px;
  //background-size: 40px 40px;
  //background-color: #111111;
  background-color: #181818;
}

hr {
  border-color: #111!important;
}

span {
  user-select: none;
}

img {
  user-select: none;
}

/* width */
::-webkit-scrollbar {
  width: 0;
  display: none;
}

///* Track */
//::-webkit-scrollbar-track {
//  box-shadow: inset 0 0 5px transparent;
//  border-radius: 10px;
//}
//
///* Handle */
//::-webkit-scrollbar-thumb {
//  background: #111;
//  border-radius: 10px;
//}

.p-inputtext {
  padding: .5rem!important;
}

.p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {
  color: #1E90FF!important;
}

.p-tabview .p-tabview-nav .p-tabview-ink-bar {
  background-color: #1E90FF!important;
}

.p-button-label {
  color: white;
  font-size: .85em;

}
button {
  padding: .5em!important;
  cursor: pointer;
}

.p-inputtext:enabled:focus {
  box-shadow: inset 0 0 0 1px #1E90FF, inset 0 0 0 1px #1E90FF, inset 0 0 0 1px #1E90FF, inset 0 0 0 1px #1E90FF!important;
}
.shadow {
  //overflow: hidden;
  box-shadow: 0px 10px 15px -2px black;
}


.shadow-bottom {
  //overflow: hidden;
  box-shadow: 0 4px 15px -2px black;
}

.shadow-left {
  //overflow: hidden;
  box-shadow: 0 10px 15px 2px black;
}
</style>
