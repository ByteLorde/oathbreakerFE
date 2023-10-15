<template>
  <div class="component-root flex-wrap pt-3" ref="root" v-if="comment" :class="isExpanded ? 'force-top' : ''">
    <div class="avatar flex align-items-center">
      <img class="avatar-image" :src="comment?.author?.icon"/>
      <div class="pl-3 flex flex-column justify-content-center">
        <span class="author-name">
          <span style="font-weight: bold;">{{comment?.author?.name}}</span>
          <i class="pi pi-verified pl-1"></i>
          <span v-if="nameText" class="name-text">{{nameText}}</span>
        </span>
        <span class="author-title">
          {{comment?.author?.title}}
          <i class="pi pi-circle-fill" style="font-size: .5em"></i>
          <span>{{comment?.date}}</span>
        </span>

      </div>
    </div>
    <div class="content py-3">
      <span>{{comment?.content}}</span>
    </div>

    <div class="actions">
      <span class="action"><i class="pi pi-thumbs-up pr-1"></i> Like</span>
      <span class="action"><i class="pi pi-thumbs-down pr-1"></i> Dislike</span>
      <span class="action" @click="toggleReply"><i class="pi pi-comments pr-1"></i> Replies ({{ comment.numChildComments }}) <i class="pi pl-2" :class="isExpanded ? 'pi-chevron-up' : 'pi-chevron-down'"></i> </span>
    </div>

    <div class="flex align-items-center py-3" style="border-bottom: 1px solid #444;" v-if="isExpanded">
      <img :src="user.icon" alt="" class="user-avatar mr-3">
      <TextArea
                autoResize class="add-comment-input"
                :placeholder="'Reply to @' + comment?.author.name"
                rows="2"
                v-model="addCommentValue"
                style="width: 100%;"></TextArea>
    </div>

    <div class="child-comments" ref="childComps" v-if="isExpanded && comment?.numChildComments > 0">
        <VideoComment v-if="!expandedComment || comment.id === expandedComment.id"
                      class="child-comment-wrapper w-100 pb-2 pt-2" v-for="childComment of childComments" :class="isExpanded ? 'active' : ''"
                      @childToggled="handleChild($event)" :comment="childComment">

        </VideoComment>

    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import {useUserStore} from "@/stores/user";
import TextArea from "primevue/textarea";
import {useCommentStore} from "@/stores/comments";
import {Comment as Comments} from "@/stores/videos";

export default defineComponent({
  name: "VideoComment",
  components: {
    TextArea
  },
  props: [
      'comment',
      'nameText'
  ],
  setup() {
    return {
      user: useUserStore().user,
      commentStore: useCommentStore()
    }
  },
  data() {
    return {
      addCommentValue: '',
      isExpanded: false,
      childCommentIndex: 0,
      childComments: [],
      expandedComment: undefined
    }
  },
  computed: {

  },
  methods: {
    toggleReply() {
      this.isExpanded = !this.isExpanded;
      if (this.childComments.length === 0) {
        this.childComments = Comments.mockArray();
      }

      this.$emit('childToggled', this.$refs.root);
    },

    handleChild(root) {
     //  console.log(root);

    // root.style.position = 'sticky';
    // root.style.top = '0';
      //position: sticky;
      //top: 0;
    }
  }
})
</script>

<style scoped lang="scss">

.user-avatar {
  border-radius: 50px;
  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height:40px;
}

.force-top {
  position: sticky;
  top: 0;
}

.component-root {
  //padding-left: 10px;
  //background: rgba(25, 25, 25, .25);
  //border-radius: 8px;
  //background:#282828;
}


.child-comment {
  border-left: 5px double #444;
}

.child-comments {
  width: 100%;
  //overflow: auto;
  //background: inherit;
  scroll-behavior: smooth;
}

.child-comment-wrapper {
  //background: inherit;
  border: 1px solid transparent;
  //border-top-right-radius: 8px;
  //border-bottom-right-radius: 8px;
  transition: all 200ms ease;
  padding-left: 60px;
  //border-radius: 8px;


  &:hover {
    //border-left:1px solid #444;

    //border-top: 1px solid #444;
    //border-bottom: 1px solid #444;
    //border-right: 1px solid #444;
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


.actions {
  //margin-top: 0px;
  width: 100%;
  display: flex;
  //border-top: 1px solid #444;
  //border-bottom: 1px solid #444;
}


.action {
  margin-right: 40px;
  cursor: pointer;
  //transition: all 0ms ease;
  user-select: none;
  font-weight: bold;
  display: flex;
  align-items: center;
  //width: 10%;
  justify-content: center;
  opacity: .5;
  font-size: .9em;
  border-radius: 8px;
  color: white;

  &:hover {
    opacity: 1;
    //background: #333;

    &:nth-child(1) {
      color: #1E90FF;
    }

    &:nth-child(2) {
      color: #FF6347;
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
</style>