const fs = require('fs')
const path = require('path')

const DATA = path.join(__dirname, '..', 'data', 'reviews.json')

function cleanTitle(s) {
  if (!s) return ''
  // remove the trailing ' | by ... | Medium' if present
  s = String(s).replace(/\s*\|\s*by\s*[^|]+\|\s*Medium\s*$/i, '')
  // remove parenthetical content
  s = s.replace(/\([^)]*\)/g, '')
  // normalize whitespace
  s = s.replace(/[^A-Za-z0-9]+/g, ' ')
  s = s.trim().toLowerCase()
  // slugify
  return s.replace(/\s+/g, '-')
}

function inferUrlFor(entry) {
  const existing = entry.url || ''
  if (existing && existing !== '#') return existing
  const slug = cleanTitle(entry.title || entry.description || 'post')
  // Use Medium user handle inferred from repo owner (Wijay000)
  return `https://medium.com/@Wijay000/${slug}`
}

function main() {
  const raw = fs.readFileSync(DATA, 'utf8')
  let arr
  try {
    arr = JSON.parse(raw)
  } catch (err) {
    console.error('Failed to parse', DATA, err.message)
    process.exit(1)
  }

  let changed = 0
  const out = arr.map((entry) => {
    if (!entry.url || entry.url === '#') {
      entry.url = inferUrlFor(entry)
      changed++
    }
    return entry
  })

  if (changed === 0) {
    console.log('No entries needed URL inference.')
    return
  }

  fs.writeFileSync(DATA, JSON.stringify(out, null, 2) + '\n', 'utf8')
  console.log(`Inferred ${changed} URLs and updated ${DATA}`)
}

main()
