<template>
  <div class="component-root">
    <Carousel circular :autoplayInterval="15000" :value="featuredItems" aut :numVisible="1" :numScroll="1" :showIndicators="false" :showNavigators="false">
      <template #item="slotProps">
        <div class="title p-3">{{slotProps.data.title}}</div>
<!--        <img class="image" :src="slotProps.data.image" :alt="slotProps.data.name" />-->
        <div class="description p-3">{{slotProps.data.description}}</div>
          <Button class="cta-action-button" :label="slotProps.data.ctaText"></Button>
      </template>
    </Carousel>

  </div>
</template>

<script>
import {defineComponent} from "vue";
import Carousel from 'primevue/carousel';
import {useFeaturedItems} from "../../stores/featured-items";
import Button from 'primevue/button'
export default defineComponent({
  name: "FeaturedItemsWidget",
  components: {
    Carousel,
    Button
  },
  setup() {
    return {
      featuredItems: useFeaturedItems().featuredItems
    }
  }
});
</script>

<style scoped lang="scss">
.cta-action-button{
  font-size: 1.25em;
  padding: 3px;
  width: 100%;
  background:transparent!important;
  border-top: 1px solid #444;
  border-top-right-radius: 0px!important;
  border-top-left-radius: 0px!important;
  &:hover {
    background: #1E90FF!important;

  }
}

.title {
  font-size: 1.25em;
  font-weight: bold;
  text-align:center;
  width: 100%;
  border-bottom: 1px solid #444;
}

.image {
  width:100%;
  height: 125px;
}

.description {
  opacity: .75;
  font-size: .8em;
  white-space: pre-wrap;
  overflow: hidden;
  word-wrap: break-word;
}

.component-root {
  //background: #161616;
  //border: 2px double #444;
  //border-radius: 8px;
  overflow: hidden;
}
</style>