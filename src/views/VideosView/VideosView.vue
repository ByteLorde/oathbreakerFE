<script>
import {useVideoStore} from "@/stores/videos";
import {useBadgeStore} from "@/stores/badges";
import {defineComponent} from "vue";
import YoutubeIframe from "@/components/iframes/youtubeiframe/YoutubeIframe.vue";

export default defineComponent({
  components: {YoutubeIframe},
  setup() {
    return {
      videoStore: useVideoStore(),
      badges: useBadgeStore()
    }
  }
});

</script>

<template>
  <main class="component-root grid">
    <div class="col-12 badges">
      <div v-for="badge of badges" class="badge"></div>
    </div>
    <div class="video col-3" v-for="video of videoStore.videos">
      <YoutubeIframe :video="video">

      </YoutubeIframe>
    </div>
  </main>
</template>


<style scoped>
.component-root {

}

.video {
  height: 100%;
}
</style>