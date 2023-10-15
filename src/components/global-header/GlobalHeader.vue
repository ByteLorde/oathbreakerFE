<template>
  <div class="component-root header flex-row">
    <div class="header-left col-3 p-0 pl-4">
      <IconShield :size="40" class="mr-3"></IconShield>
      <div class="p-inputgroup search-input">
        <i class="pi pi-search p-inputgroup-addon"></i>
        <InputText placeholder="Search Oathkeeper" style="width: 75%; box-shadow: none!important;"></InputText>
      </div>
    </div>
    <div class="header-middle col-6 px-8 py-0">

      <TabView style="height: 100%">
        <TabPanel>
          <template #header>
            <i class="pi pi-home tab-icon"></i>
          </template>
        </TabPanel>
        <TabPanel>
          <template #header>
            <i class="pi pi-youtube tab-icon"></i>
          </template>
        </TabPanel>
        <TabPanel>
          <template #header>
            <i class="pi pi-calendar-plus tab-icon"></i>
          </template>
        </TabPanel>
        <TabPanel>
          <template #header>
            <i class="pi pi-shield tab-icon"></i>
          </template>
        </TabPanel>
      </TabView>
    </div>
    <div class="header-right col-3 p-0 p-4">
      <div class="avatar-container">
        <div class="flex-column flex mr-3">
          <span class="user-name flex align-items-center">{{user?.name}} <i class="pi pi-verified pl-2"></i></span>
          <span class="user-title">{{user?.title}}</span>
        </div>
        <img class="avatar" :src="user?.icon"/>
      </div>
      <i class="pi pi-bell header-item"></i>
      <i class="pi pi-comments header-item"></i>
      <i class="pi pi-bitcoin header-item"></i>
      <i class="pi pi-plus header-item"></i>

<!--      <div class="flex align-items-center pl-2">-->
<!--        <i class="pi pi-comment header-item"></i>-->
<!--&lt;!&ndash;        <i class="pi pi-bell header-item mx-1"></i>&ndash;&gt;-->
<!--&lt;!&ndash;        <i class="pi pi-chevron-down header-item"></i>&ndash;&gt;-->
<!--      </div>-->

    </div>
  </div>
</template>

<script>
import InputText from 'primevue/inputtext';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import IconShield from "@/components/icons/IconShield.vue";
import {useUserStore} from "@/stores/user";

export default {
  name: "GlobalHeader",
  components: {
    IconShield,
    InputText,
    TabView,
    TabPanel
  },
  mounted() {
    console.log("test")
  },
  setup() {
    return {
      user: useUserStore().user
    }
  }
}
</script>

<style scoped lang="scss">

.header {
  background: #222;
  //background: #181818;
  //width: 100%;
  //border-bottom: 1px solid #444;
  //box-shadow: 1px 1px 1px #444;
}

.header > * {
  display: flex;
  align-items: center;
  height: 100%;
  //width: 25%;
}

.user-title {
  opacity: .5;
  font-size: .9em;
  text-align: right;
}
.component-root {
  width: 100vw;
  height: 75px;
  display: flex;
  align-items: center;
  //padding: 0 1rem;
  justify-content: space-between;
}

.avatar-container {
  display: flex;
  align-items: center;
  border-right: 1px solid #444;
  padding-right: 10px;
}

.avatar {
  width: 45px;
  height: 45px;
  border-radius: 50px;
  border: 2px double #444;
}

.user-name {
  font-weight: bold;
  font-size: 1em;
}

.search-input {
  display: flex;
  align-items: center;
  width: 100%;
  & > * {
    height: 50px;
    background: #333;
    border: 0px solid transparent;
  }

  & > *:nth-child(1) {
    border-top-left-radius: 50px!important;
    border-bottom-left-radius: 50px;
    border-right: 0 solid transparent!important;
  }

  & > *:nth-child(2) {
    border-top-right-radius: 50px!important;
    border-bottom-right-radius: 50px;
  }
}

.header-left {
  font-size: 1.75em;
}

.header-text {
  margin-left: 7px;
}

.header-right {
  display: flex;
  justify-content: flex-end;
}

.header-item {
  font-size: 1.15em;
  background: #333;
  padding: 15px;
  cursor: pointer;
  margin-left: 10px;

  border-radius: 50px;
  transition: all 200ms ease;
  &:nth-child(1) {
    margin-left: 15px;
  }

  &:hover {
    //color: #1E90FF;
    background-color: #444;
  }
}

.header-middle {
  display: flex;
  justify-content: center;
  //width: 40%!important;
}

:deep .p-tabview-panels {
  height: 0;
  display: none;
}

:deep .p-tabview-nav-container, :deep .p-tabview-nav-content, :deep .p-tabview-nav {
  height: 100%;
}

:deep .p-tabview .p-tabview-nav li:not(.p-highlight):not(.p-disabled):hover .p-tabview-nav-link, :deep .p-tabview .p-tabview-nav li .p-tabview-nav-link {
  border: none!important;
}

:deep .p-tabview .p-tabview-nav .p-tabview-nav-link {
  height: 100%;
}

:deep .p-highlight {
  background: none;
}

:deep .p-tabview .p-tabview-nav {
  border: none!important;
}

.tab-icon {
  font-size: 1.35em;
  //padding: 0 100px;
  width: 100%;
  display: flex;
  justify-content: center;
}

:deep(.p-tabview) {
  width: 100%;

  & .p-tabview-nav, & .p-tabview-nav li {
    width: 100%;
  }
}

</style>