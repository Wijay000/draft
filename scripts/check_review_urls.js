const fs = require('fs')
const path = require('path')

const DATA = path.join(__dirname, '..', 'data', 'reviews.json')
const OUT = path.join(__dirname, '..', 'data', 'url-check-report.json')

const TIMEOUT = 10000
const CONCURRENCY = 6

async function checkUrl(url) {
  const controller = new AbortController()
  const id = setTimeout(() => controller.abort(), TIMEOUT)
  try {
    // Try HEAD first
    let res = await fetch(url, { method: 'HEAD', redirect: 'follow', signal: controller.signal })
    clearTimeout(id)
    if (res.status >= 200 && res.status < 400) return { ok: true, status: res.status, statusText: res.statusText }
    // Some servers don't allow HEAD; try GET as fallback
    if (res.status === 405 || res.status === 501 || res.status === 0) {
      const controller2 = new AbortController()
      const id2 = setTimeout(() => controller2.abort(), TIMEOUT)
      try {
        const res2 = await fetch(url, { method: 'GET', redirect: 'follow', signal: controller2.signal })
        clearTimeout(id2)
        return { ok: res2.status >= 200 && res2.status < 400, status: res2.status, statusText: res2.statusText }
      } catch (err) {
        clearTimeout(id2)
        return { ok: false, error: String(err) }
      }
    }
    return { ok: false, status: res.status, statusText: res.statusText }
  } catch (err) {
    clearTimeout(id)
    return { ok: false, error: String(err) }
  }
}

async function main() {
  const raw = fs.readFileSync(DATA, 'utf8')
  let arr
  try { arr = JSON.parse(raw) } catch (err) { console.error('Failed to parse JSON', err.message); process.exit(1) }

  const toCheck = arr.map((entry, idx) => ({ idx, title: entry.title, url: entry.url || '' }))
    .filter(e => e.url && e.url !== '#')

  console.log(`Checking ${toCheck.length} URLs with concurrency ${CONCURRENCY} and timeout ${TIMEOUT}ms...`)

  const results = []
  let i = 0
  async function worker() {
    while (i < toCheck.length) {
      const cur = toCheck[i++] // eslint-disable-line no-plusplus
      try {
        const res = await checkUrl(cur.url)
        results.push({ ...cur, ...res })
        console.log(`Checked: ${cur.title} -> ${cur.url} => ${res.ok ? 'OK' : 'BROKEN'} ${res.status || ''} ${res.error ? res.error : ''}`)
      } catch (err) {
        results.push({ ...cur, ok: false, error: String(err) })
        console.log(`Error checking ${cur.url}: ${err.message}`)
      }
    }
  }

  const workers = Array.from({ length: Math.min(CONCURRENCY, toCheck.length) }, () => worker())
  await Promise.all(workers)

  fs.writeFileSync(OUT, JSON.stringify(results, null, 2) + '\n', 'utf8')
  const broken = results.filter(r => !r.ok)
  console.log('\nSummary:')
  console.log(`Total checked: ${results.length}`)
  console.log(`Working: ${results.length - broken.length}`)
  console.log(`Broken: ${broken.length}`)
  if (broken.length > 0) console.log(`Broken entries written to ${OUT}`)
}

main().catch(err => { console.error(err); process.exit(1) })
