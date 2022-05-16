<script setup lang="ts">
import BasicHeader from './layout/basic-header.vue'
import BasicBody from './layout/basic-body.vue'
import BasicMaterials from './layout/basic-materials.vue'
</script>

<template>
  <div class="basic-editor-layout">
    <BasicHeader />
    <div class="basic-editor-main">
      <BasicMaterials />
      <BasicBody />
    </div>
  </div>
</template>

<style lang="less" scoped>
.basic-editor-layout{
  height:100vh;
}
.basic-editor-main {
  display: flex;
  height:100%;
}
</style>
