<template>
  <div v-if="comment" class="component-root">
    <div class="comments">
      <CommentThread
          :comment="comment"
          :name-text="'Commented'"
      >
      </CommentThread>
    </div>

    <div v-if="comment" class="nested px-3 py-2">
      <div class="avatar pb-2 flex align-items-center">
        <img :src="comment.video?.author?.icon" class="avatar-image"/>
        <div class="pl-3 flex flex-column justify-content-center">
          <span class="author-name">{{ comment.video?.author?.name }} <i class="pi pi-verified pl-1"></i></span>
          <span class="author-title">
            {{ comment.video?.author?.title || 'User' }}
            <i class="pi pi-circle-fill" style="font-size: .5em"></i>
            <span>{{ comment.video?.date }}</span>
          </span>

        </div>
      </div>

      <iframe :src="comment.video.source"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              class="iframe"
              frameborder="0"
              title="YouTube video player">
      </iframe>
      <div class="video-meta grid">
        <div class="col-12 pt-2 pb-0">
          <div class="video-title pb-3">
            {{ comment.video.title }}
          </div>
          <span class="muted"><i class="pi pi-user icon pr-1"></i> {{ comment.video.author.name }}</span>
          <div class="video-detail muted">
            <span><i class="pi pi-eye pr-1 icon"></i> {{ comment.video.views }} views</span>
            <span><i class="pi pi-clock px-1 icon"></i> {{ comment.video.date }}</span>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import {defineComponent} from "vue";
import CommentThread from "@/components/thread/comment-thread.vue";

export default defineComponent({
  name: "CommentFeedDisplay",
  components: {
    CommentThread
  },
  props: [
    'comment'
  ]
});
</script>


<style lang="scss" scoped>
.video-title {
  font-size: 1.2em;
  font-weight: bold;
}

.nested {
  margin: 0 20px 20px;
  border-radius: 8px;
  border-left: 5px double #444;
  //background: #282828;
}

.icon {
  font-size: .8em;
}

.bullet {
  font-size: .5em;
}

.muted {
  opacity: .5;
}

.video-detail {
  display: flex;
  justify-content: space-between;
}

.video-meta {
  overflow-y: auto;
}


.component-root {
  height: 100%;
  border-radius: 8px;
  transition: all 200ms ease;
  border: 1px solid transparent;
  //background: #222;

  &:hover {
    //background-color: #111;
    //box-shadow: 0 3px 7px #202020;
    border: 1px solid #202020;
  }

}

.iframe {
  width: 100%;
  height: 100%;
  min-height: 400px;
  border-radius: 8px;
}


.avatar-image {
  width: 35px;
  height: 35px;
  border-radius: 50px;
  border: 2px double #444;

}

.author-name {

}


.author-name {
  font-weight: bold;
}

.author-title {
  opacity: .5;
  color: white;
  font-size: .85em;
  display: flex;
  align-items: center;

  & > i {
    margin: 2px 7px 0;
  }
}
</style>