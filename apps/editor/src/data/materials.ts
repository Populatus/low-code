import { IMaterial } from '@populatus/shared'
export const materialList: IMaterial[] = [
  {
    id: 1,
    name: 'PopuImage',
    type: 'components',
    category: 'base',
    version: '0.0.1',
    source: '/popu-image.0.0.1.umd.js',
    data: [{
      version: '0.0.1',
      source: '/popu-image.0.0.1.umd.js',
    }],
    title: '图片',
    thumbnail: '',
  },
]
export function getMaterialEditorProps(material: IMaterial) {
  return (window as any)[material.name]?.props
}

export function getMaterialRenderFun(material: IMaterial) {
  return (window as any)[material.name].render
}

export function getMaterialDefaultProps(material: IMaterial) {
  const props = getMaterialEditorProps(material)
  if (!props)
    return {}
  return Object.keys(props).reduce((pre, key) => {
    pre[key] = props[key].defaultValue
    return pre
  }, {})
}
