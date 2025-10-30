import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const file = path.resolve(process.cwd(), 'data', 'reviews.json')
  try {
    const body = req.body
    // Validate it's an array
    if (!Array.isArray(body)) return res.status(400).json({ error: 'Expected an array' })

    fs.writeFileSync(file, JSON.stringify(body, null, 2), 'utf8')

    // Try to create a git commit and push. This will work only if the server
    // environment has git and remote auth configured. We attempt it and return
    // the result; failures will not make the write fail.
    try {
      execSync('git add ' + file)
      execSync('git commit -m "Update movie reviews via admin UI"')
      // Attempt to push. This may fail if no auth is present; catch errors.
      try {
        execSync('git push origin main')
        return res.status(200).json({ message: 'Saved and pushed' })
      } catch (pushErr) {
        return res.status(200).json({ message: 'Saved (commit created, push failed)', pushError: String(pushErr) })
      }
    } catch (gitErr) {
      // If git isn't available or commit fails, still return success for file write.
      return res.status(200).json({ message: 'Saved (file updated, git commit not performed)', gitError: String(gitErr) })
    }
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}
