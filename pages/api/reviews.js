import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  const file = path.resolve(process.cwd(), 'data', 'reviews.json')
  try {
    const raw = fs.readFileSync(file, 'utf8')
    const data = JSON.parse(raw)
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
