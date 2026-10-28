// Central media registry. Vite eagerly bundles every local asset and we expose
// slug -> url maps so components can reference images by their human-readable name
// (e.g. img['me-stage'], icon['icon-email-white'], logo['logo-symbol-white']).

const imageGlob = import.meta.glob('./images/*.{webp,png,jpg,jpeg,svg,gif}', {
  eager: true,
  query: '?url',
  import: 'default',
})
const iconGlob = import.meta.glob('./icons/*.svg', {
  eager: true,
  query: '?url',
  import: 'default',
})
const logoGlob = import.meta.glob('./logos/*.svg', {
  eager: true,
  query: '?url',
  import: 'default',
})

function toMap(globbed) {
  const map = {}
  for (const [path, url] of Object.entries(globbed)) {
    const slug = path.split('/').pop().replace(/\.[^.]+$/, '')
    map[slug] = url
  }
  return map
}

export const img = toMap(imageGlob)
export const icon = toMap(iconGlob)
export const logo = toMap(logoGlob)
