<script>
import {useBadgeStore} from "@/stores/badges";
import {defineComponent} from "vue";
import {useActivityStore} from "@/stores/newsfeed";
import CommentFeedDisplay from "@/views/HomeView/_CommentFeedDisplay.vue";
import VideoFeedDisplay from "@/views/HomeView/_VideoFeedDisplay.vue";
import ActivityPosterWidget from "@/components/activity-poster-widget/ActivityPosterWidget.vue";

export default defineComponent({
  components: {
    ActivityPosterWidget,
    VideoFeedDisplay,
    CommentFeedDisplay,
  },
  setup() {
    return {
      activities: useActivityStore(),
      badges: useBadgeStore()
    }
  }
});

</script>

<template>
  <main class="component-root grid">
    <div class="activity-poster col-12 mt-2">
      <ActivityPosterWidget></ActivityPosterWidget>
    </div>
    <div class="video col-12 mt-3" v-for="activity of activities.activityFeed">
      <CommentFeedDisplay v-if="!!activity.comment" :comment="activity.comment">
      </CommentFeedDisplay>

      <VideoFeedDisplay v-else :video="activity.video">
      </VideoFeedDisplay>
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