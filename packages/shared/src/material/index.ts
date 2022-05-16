export interface IMaterialData {
  /** 版本 */
  version: string,
  /** 物料源 */
  source: string
}

export interface IMaterial extends IMaterialData {
  id: number,
  title: string,
  thumbnail: string,
  type: string,
  name: string,
  category: string,
  data: IMaterialData[]
}

export interface IMaterialLoader {
  type: string;
  load(material: IMaterial): Promise<any>;
}

export function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0
    // eslint-disable-next-line no-mixed-operators
    const v = c === 'x' ? r : r & 0x3 | 0x8
    return v.toString(16)
  })
}
