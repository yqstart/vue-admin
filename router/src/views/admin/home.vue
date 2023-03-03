<script setup lang="ts">
import { ref, nextTick } from "vue"
import { chart1, chart2 } from "./echarts"
interface ICard {
  title: string
  price: number
  icon: string
  iconColor: string
  totalTitle: string
  total: number
}

const cards = ref<ICard[]>([
  {
    title: "总人数",
    price: 200,
    icon: "fab fa-alipay",
    iconColor: "text-blue-500",
    totalTitle: "总人数",
    total: 34343
  },
  {
    title: "销售额",
    price: 200,
    icon: "fab fa-android",
    iconColor: "text-violet-500",
    totalTitle: "总销售额",
    total: 34343
  },
  {
    title: "订单数",
    price: 200,
    icon: "fab fa-angellist",
    iconColor: "text-red-500",
    totalTitle: "总订单数",
    total: 34343
  },
  {
    title: "评论数",
    price: 200,
    icon: "fab fa-apple",
    iconColor: "text-pink-500",
    totalTitle: "总评论数",
    total: 34343
  }
])

nextTick(() => {
  echarts.init(document.getElementById("chart1")).setOption(chart1)
  echarts.init(document.getElementById("chart2")).setOption(chart2)
})
</script>

<template>
  <div class="grid grid-flow-col gap-3">
    <el-card
      shadow="hover"
      v-for="(card, index) in cards"
      :key="index"
      class="cursor-pointer">
      <template #header>
        <div class="flex justify-between items-center">
          {{ card.title }}
          <el-tag
            type="danger"
            effect="dark"
            >月</el-tag
          >
        </div>
      </template>

      <section class="flex justify-between items-center mt-3">
        <span class="text-3xl">{{ card.price }}</span>
        <i
          class="text-2xl"
          :class="[card.icon, card.iconColor]"></i>
      </section>

      <section class="flex justify-between items-center mt-6">
        <span>{{ card.totalTitle }}</span>
        <span>{{ card.total }}</span>
      </section>
    </el-card>
  </div>
  <div class="p-3 mt-3 bg-white grid grid-cols-2">
    <div
      id="chart1"
      class="h-80"></div>
    <div
      id="chart2"
      class="h-80"></div>
  </div>
</template>

<style scoped lang="scss"></style>
