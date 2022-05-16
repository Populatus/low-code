<script setup lang="ts">
import { IMaterial } from '@populatus/shared'
import { materialList } from '@/data'
import { useProjectStore } from '@/store'
const add = (material: IMaterial) => {
  const { addMaterial } = useProjectStore()
  addMaterial(material)
}
</script>

<template>
  <div class="basic-materials">
    <div v-for="material in materialList" :key="material.id" class="basic-materials-list">
      <div class="basic-materials-item" @click="add(material)">
        {{ material.title }}
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.basic-materials {
  min-width: 250px;
  height: 100%;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  flex-direction: column;

  &-list {
    padding: 12px;
  }

  &-item {
    width: 60px;
    height: 60px;
    line-height: 60px;
    background: #fff;
    text-align: center;
    display: block;
    border-bottom: 1px solid #e5e5e5;
    font-size: 12px;
    cursor: pointer;
  }
}
</style>
