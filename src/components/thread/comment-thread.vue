<template>
  <div class="component-root flex-wrap">
    <VideoComment :comment="selectedComment"></VideoComment>

  </div>
</template>

<script>
import {defineComponent} from "vue";
import VideoComment from "@/components/thread/video-comment.vue";

export default defineComponent({
  name: "CommentThread",
  components: {
    VideoComment
  },
  props: [
      'comments',
      'nameText',
      'selectedComment'
  ],
  setup() {
    return {
      expanded: false
    }
  },
  computed: {

    alteredComment() {
      if (!this.comment) {
        return;
      }

      if (!this.expanded) {
        let childComments = this.comment.childComments ? [this.comment.childComments[0]] : [];
        return {
          ...this.comment,
          childComments: childComments
        }
      }

      return {...this.comment};
    }
  }
})
</script>

<style scoped lang="scss">

.component-root {
  //padding-left: 10px;
  //background: rgba(25, 25, 25, .25);
  border-radius: 8px;
  border: none!important;
}

.child-comment {
  border-left: 5px double #444;
}

.child-comments {
  width: 100%;
}

.actions {
  margin-top: 10px;
  width: 100%;
  display: flex;
}

.action {
  display: flex;
  align-items: center;

  & > i {
    padding-right: 5px;
  }
}
.avatar-image {
  width: 35px;
  height: 35px;
  border-radius: 50px;
  border: 2px double #444;

}

.author-name {
  display: flex;
  align-items: center;

  & > i {
    margin-left: 5px
  }
}

.action {
  margin-right: 25px;
  cursor: pointer;
  transition: all 200ms ease;
  user-select: none;
  font-weight: bold;

  &:hover {
    &:nth-child(1) {
      color: mediumturquoise;
    }
    &:nth-child(2) {
      color: salmon;
    }
    &:nth-child(3) {
      color: mediumseagreen;
    }
    &:nth-child(4) {
      color: slateblue;
    }
  }

  & > i {
    margin-right: 5px;
  }
}

.author-name {
  font-weight: bold;
}

.name-text {
  padding-left: 7px;
  opacity: .35;
  margin-bottom: 2px;
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

.expand {
  float: right;
  display: flex;
  align-items: center;
  cursor: pointer;

  transition: all 200ms ease;

  &:hover {
    color: aqua;
  }
  & i {
    margin-left: 10px;
  }
}
</style>