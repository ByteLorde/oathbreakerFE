<template>
  <div v-if="video" class="video-feed-root shadow">
    <div class="nested pt-4 px-4">
      <div class="avatar pb-3 flex align-items-center" >
        <img :src="video?.author?.icon" class="avatar-image"/>
        <div class="pl-3 flex flex-column justify-content-center">
          <span class="author-name">{{ video?.author?.name }} <i class="pi pi-verified pl-1"></i> <span
              class="name-text">Posted</span></span>
          <span class="author-title">
            {{ video?.author?.title || 'User' }}
            <i class="pi pi-circle-fill" style="font-size: .5em"></i>
            <span>{{ video?.date }}</span>
          </span>

        </div>
      </div>

      <iframe :src="video.source"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              class="iframe"
              frameborder="0"
              title="YouTube video player">
      </iframe>

      <div class="video-title pb-3 pt-1">
        {{ video.title }}
      </div>

      <div class="video-description">
        {{video.description}}
      </div>
    </div>

    <div class="actions mt-3">
      <span class="action"><i class="pi pi-thumbs-up pr-1"></i> Like</span>
      <span class="action"><i class="pi pi-thumbs-down pr-1"></i> Dislike</span>
      <span class="action" @click="openComments"><i class="pi pi-comments pr-1"></i> Comments ({{video.numComments}})</span>
      <span class="action"><i class="pi pi-share-alt pr-1"></i> Share</span>
    </div>

    <div class="add-comment-container px-4 py-3" v-if="isSubmitShow">
      <div class="flex align-items-center">
        <img :src="user.icon" alt="" class="user-avatar">
        <TextArea @click="showSubmitButtons(true)"
                  maxlength="60"
                  autoResize class="add-comment-input"
                  placeholder="Share your thoughts"
                  v-model="userComment"
                  rows="3"
                  style="width: 100%;"></TextArea>
      </div>

      <div :class="userComment?.length > 0 ? 'expanded' : 'collapsed'" class="add-comment-actions flex justify-content-between align-items-center pt-3">

        <span class="comment-max" :class="userComment.length === 60 ? 'invalid' : ''">
          Characters: {{userComment.length}}/60
        </span>
        <div class="buttons flex align-items-center">
          <Button class="p-button-danger mr-2" label="Cancel" @click="userComment = ''"></Button>
          <Button class="p-button-info" label="Comment"></Button>
        </div>
      </div>
      <div class="comments-container mt-3">
        <CommentThread :selected-comment="video.topComment" :comments="video.comments">

        </CommentThread>
      </div>
    </div>


    <i class="activity-options m-3 pi pi-ellipsis-v" type="button" @click="toggle" />
    <OverlayPanel ref="op">
      <img src="https://primefaces.org/cdn/primevue/images/product/bamboo-watch.jpg" alt="Bamboo Watch" />
    </OverlayPanel>


  </div>


</template>

<script>
import {defineComponent} from "vue";
import {useCommentStore} from "@/stores/comments";
import CommentThread from "@/components/thread/comment-thread.vue";
import TextArea from "primevue/textarea";
import Button from "primevue/button";
import {useUserStore} from "@/stores/user";
import OverlayPanel from 'primevue/overlaypanel';

export default defineComponent({
  name: "VideoFeedDisplay",
  components: {
    CommentThread,
    TextArea,
    Button,
    OverlayPanel
  },
  props: [
    'video'
  ],
  setup() {
    return {
      commentStore: useCommentStore(),
      comments: [],
      user: useUserStore().user,
    }
  },
  data() {
    return {
      isSubmitShow: true,
      userComment: ''

    }
  },
  mounted() {
    console.log(this.video);
    this.comments = this.commentStore.fetchComments(this.video.id);
  },
  methods: {
    toggle(event) {
      this.$refs.op.toggle(event);
    },

    showSubmitButtons(value) {
      this.isSubmitShow = value;
    },

    expandComments() {
      console.log(this.user);
    },

    openComments() {
      this.isSubmitShow = true;
      console.log('success');
    }
  }
});
</script>


<style lang="scss" scoped>
.comments-container {
  border-top: 2px solid #444;
  //max-height: 400px;
  //overflow-y: auto;
}

.add-comment-actions {
  transition: all 150ms ease;
  overflow: hidden;

  &.expanded {
    max-height: 50px;
    opacity: 1;
  }

  &.collapsed {
    max-height: 0;
    opacity: 0;
    padding: 0!important;
  }
}

.comment-max {
  opacity: .75;
  //transition: all 100ms ease;

  &.invalid {
    opacity: 1;
    color: rgb(255, 87, 87);
  }
}

.video-title {
  font-size: 1.35em;
  font-weight: bold;
}

.activity-options {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;

  padding: 15px;
  border-radius: 50px;
  transition: all 250ms ease;

  &:hover {
    background: #444;
  }
}

.video-description {
  opacity: .5;
  width:100%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}


.actions {
  margin-top: 10px;
  width: 100%;
  display: flex;
  border-top: 2px solid #444;
  //border-top: 2px solid #444;

}


.add-comment-container {
  border-top: 2px solid #444;
}

.action {
  padding: 12px 0;
  cursor: pointer;
  transition: all 250ms ease;
  user-select: none;
  font-weight: bold;
  display: flex;
  align-items: center;
  width: 25%;
  justify-content: center;
  opacity: .75;

  &:hover {
    opacity: 1;
    //background: #333;
    background: #1E90FF;
    //border-top: 2px solid #1E90FF;


    //&:nth-child(1) {
    //  color: mediumturquoise;
    //}
    //
    //&:nth-child(2) {
    //  color: salmon;
    //}
    //
    //&:nth-child(3) {
    //  color: mediumseagreen;
    //}
    //
    //&:nth-child(4) {
    //  color: slateblue;
    //}
  }

  & > i {
    margin-right: 5px;  //&:nth-child(1), &:nth-child(2), &:nth-child(3) {
    //  border-right: 2px solid #444;
    //}
  }


}

.icon {
  font-size: .8em;
}

.bullet {
  font-size: .5em;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50px;
  overflow: hidden;
  margin-right: 15px;
}

.expand-comments-action {
  transition: opacity 250ms ease;
  opacity: .75;

  &:hover {
    opacity: 1;
  }
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


.iframe {
  width: 100%;
  height: 100%;
  min-height: 400px;
  border-radius: 8px;
}

.name-text {
  padding-left: 2px;
  opacity: .35;
  margin-bottom: 2px;
}

.video-feed-root {
  height: 100%;
  border-radius: 8px;
  transition: all 200ms ease;
  //position: relative;
  position: sticky;

  overflow: hidden;
  background: #282828;
  //background: rgba(80, 80, 80, .25);
  backdrop-filter: blur(2px);
  //background: rgba(0, 0, 0, .2);
  border: 2px solid #444;
  position: -webkit-sticky;
  position: sticky;
  top: 200px;

}

.avatar-image {
  width: 40px;
  height: 40px;
  border-radius: 50px;
  border: 2px double #444;

}

.author-name {
  display: flex;
  align-items: center;

  & > i {
    margin: 0 5px;
  }
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