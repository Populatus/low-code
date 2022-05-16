export function loadScript(src: string) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = src
    function onload() {
      resolve(src)
      script.onload = script.onerror = null
    }
    script.onload = onload
    script.onerror = reject
    document.head.appendChild(script)
  })
}
