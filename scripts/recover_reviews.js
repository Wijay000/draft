const fs = require('fs');
const path = require('path');

const bakPath = path.resolve(__dirname, '..', 'data', 'reviews.json.bak');
const outPath = path.resolve(__dirname, '..', 'data', 'reviews.recovered.json');

if (!fs.existsSync(bakPath)) {
  console.error('Backup file not found:', bakPath);
  process.exit(1);
}

const txt = fs.readFileSync(bakPath, 'utf8');
const objs = [];

// Find balanced {...} blocks
for (let i = 0; i < txt.length; i++) {
  if (txt[i] === '{') {
    let depth = 0;
    for (let j = i; j < txt.length; j++) {
      if (txt[j] === '{') depth++;
      else if (txt[j] === '}') depth--;
      if (depth === 0) {
        const candidate = txt.slice(i, j + 1);
        try {
          // Try to fix trailing commas inside object by removing them before closing }
          const cleaned = candidate.replace(/,\s*}/g, '}').replace(/,\s*]/g, ']');
          const parsed = JSON.parse(cleaned);
          // Basic sanity check: parsed should be object and have a title property
          if (parsed && typeof parsed === 'object' && parsed.title) {
            // Avoid duplicates by title+description
            const key = (parsed.title || '') + '||' + (parsed.description || '');
            if (!objs.find(o => ((o.title||'') + '||' + (o.description||'')) === key)) {
              objs.push(parsed);
            }
          }
        } catch (e) {
          // ignore
        }
        i = j; // advance outer loop
        break;
      }
    }
  }
}

if (objs.length === 0) {
  console.error('No recoverable JSON objects found in backup.');
  process.exit(2);
}

fs.writeFileSync(outPath, JSON.stringify(objs, null, 2), 'utf8');
console.log('Recovered', objs.length, 'objects to', outPath);
console.log('Sample:', JSON.stringify(objs.slice(0,3), null, 2));
process.exit(0);
