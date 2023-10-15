<template>
  <div class="component-root">
    <iframe v-if="video"
            class="iframe p-3"
            :src="video.source"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
    </iframe>
    <div class="video-meta grid px-3 pb-2">
      <div class="col-12 py-0">
        <div class="video-title pb-3">
          {{video.title}}
        </div>
        <span class="muted"><i class="pi pi-user icon pr-1"></i> {{video.author.name}}</span>
        <div class="video-detail muted">
          <span><i class="pi pi-eye pr-1 icon"></i> {{video.views}} views</span>
          <span><i class="pi pi-clock px-1 icon"></i> {{video.date}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "YoutubeIframe",
  props: ['video']
});
</script>

<style scoped lang="scss">
.video-title {
  font-size: 1.1em;
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

}
.avatar {
  width: 25px;
  height: 25px;
  border-radius: 50px;
  border: 2px double #444;

}

.component-root {
  height: 100%;
  cursor: pointer;
  border-radius: 8px;
  transition: all 200ms ease;
  border: 1px solid transparent;
  &:hover {
    //background-color: #111;
    margin-top: -5px;
    box-shadow: 0 3px 7px #202020;
    border: 1px solid #202020;
  }

}
.iframe {
  width: 100%;
  height: 100%;
  min-height: 200px;
  border-radius: 8px;
}
</style>