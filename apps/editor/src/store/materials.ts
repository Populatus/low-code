import { defineStore } from 'pinia'
import { ref } from 'vue'
import { IMaterial, uuid } from '@populatus/shared'
import { getMaterialDefaultProps, getMaterialRenderFun } from '@/data'
import { loadScript } from '@/utils'
import app from '@/app'

export const useProjectStore = defineStore('project', () => {
  const materials = ref<Record<string, IMaterial>>({})
  const elements = ref([])
  function getMaterial(mid: number) {
    return materials.value[mid]
  }
  async function addMaterial(material: IMaterial) {
    const m = getMaterial(material.id)
    if (!m)
      await loadMaterials(material)
    const props = getMaterialDefaultProps(material)
    elements.value.push({ id: uuid(), name: material.name, props })
  }
  async function loadMaterials(material: IMaterial) {
    await loadScript(material.source)
    const render = getMaterialRenderFun(material)
    app.component(material.name, render)
    materials.value = {
      ...materials.value,
      [material.id]: material,
    }
  }
  return {
    materials,
    addMaterial,
    elements,
  }
})

