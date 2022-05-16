<script setup lang="ts">
import { useProjectStore } from '@/store'
const { elements } = useProjectStore()
</script>

<template>
  <div class="basic-body">
    <component :is="e.name" v-for="e in elements" :key="e.id" v-bind="e.props" />
  </div>
</template>

<style lang="less" scoped>
.basic-body {
  width: 100%;
}
</style>
