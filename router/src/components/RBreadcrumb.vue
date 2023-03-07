<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <template v-if="routeRecord">
        <el-breadcrumb-item
          v-for="(r, index) of routeRecord.matched"
          :key="index"
          :to="{ path: r.path }"
          >{{ r.meta.menu?.title }}</el-breadcrumb-item
        >
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useMenuStore } from "@/store/menu";

const { routeRecord } = storeToRefs(useMenuStore());
</script>

<style scoped lang="scss"></style>
