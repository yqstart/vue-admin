<template>
  <div class="animate-list">
    <TransitionGroup
      name="animate"
      @before-enter="beforeEnter"
      appear
      @enter="enter"
      :tag="tag"
    >
      <slot />
    </TransitionGroup>
  </div>
</template>

<script lang="ts" setup>
import gsap from "gsap";
import {RendererElement} from "vue";
import {number} from "yup";

interface Props {
  tag?: string
  duration?: number
  delay?: number

}

const props = withDefaults( defineProps<Props>(), {
  tag: '',
  duration: 3,
  delay: .2
})

const beforeEnter = (el: RendererElement) => {
  gsap.set(el, {
    opacity: 0
  });
};

const enter = (el: RendererElement) => {
  gsap.to(el, {
    opacity: 1,
    duration: props.duration,
    delay: el.dataset.index * props.delay,
  });
};
</script>

<style scoped lang="scss">
.animate-list {
  position: relative;
  .animate-leave-active {
    transition: all 1s ease;
    position: absolute;
    width: 100%;
  }
  .animate-leave-to {
    opacity: 0;
  }
  .animate-move {
    transition: all 1s ease;
  }
}
</style>
