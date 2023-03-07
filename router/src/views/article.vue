<template>
  <div class="article">
    <AnimateList tag="ul" :duration="2">
      <li
          v-for="(item, index) of articles"
          :key="item.id"
          :data-index="index"
      >
        {{ item.title }}
      </li>
    </AnimateList>
  </div>
</template>

<script lang="ts" setup>
import articleApi from "@/apis/articleApi";
const articles = ref();

articleApi.article().then(({ result }) => (articles.value = result));

</script>

<style scoped lang="scss">
.article {
  position: relative;
  padding: 30px;
  width: 100vw;
  height: 100vh;
  ul {
    li {
      padding: 10px;
      margin-bottom: 20px;
      background: #8e44ad;
      color: #fff;
      border-radius: 8px;
    }
  }
}
</style>
