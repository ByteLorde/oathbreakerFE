<template>
  <div class="component-root flex-wrap p-3">
    <div class="avatar pb-0 flex align-items-center">
      <img class="avatar-image" :src="alteredComment?.author?.icon"/>
      <div class="pl-3 flex flex-column justify-content-center">
        <span class="author-name">
          <span style="font-weight: bold;">{{alteredComment?.author?.name}}</span>
          <i class="pi pi-verified pl-1"></i>
          <span v-if="nameText" class="name-text">{{nameText}}</span>
        </span>
        <span class="author-title">
          {{alteredComment?.author?.title}}
          <i class="pi pi-circle-fill" style="font-size: .5em"></i>
          <span>{{alteredComment?.date}}</span>
        </span>

      </div>
    </div>
    <div class="content pt-2">
      <span>{{alteredComment?.content}}</span>
    </div>

    <div class="child-comments" :class="expanded ? 'visible' : 'hidden'">
      <VideoCommentThread v-if="!!alteredComment?.childComments && alteredComment.childComments.length > 0"
                     :comment="alteredComment?.childComments[0]"
                     class="child-comment mx-3 my-3"
      >
      </VideoCommentThread>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import InputText from "primevue/inputtext";
import {useUserStore} from "@/stores/user";

export default defineComponent({
  name: "VideoCommentThread",

  props: [
      'comments',
      'nameText',
      'selectedComment'
  ],
  setup() {
    return {
      expanded: false,
      user: useUserStore().user
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
}


.child-comment {
  border-left: 5px double #444;
}

.child-comments {
  width: 100%;
  border-left: 5px solid red;
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