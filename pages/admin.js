import { useState, useEffect } from 'react'

export default function Admin() {
  const [reviews, setReviews] = useState([])
  const [form, setForm] = useState({ title: '', date: '', description: '', url: '' })
  const [status, setStatus] = useState('')

  useEffect(() => {
    fetch('/api/reviews')
      .then(r => r.json())
      .then(data => setReviews(data))
      .catch(() => setReviews([]))
  }, [])

  const addReview = () => {
    if (!form.title) return
    const next = [form, ...reviews]
    setReviews(next)
    setForm({ title: '', date: '', description: '', url: '' })
  }

  const removeReview = (index) => {
    const next = reviews.filter((_, i) => i !== index)
    setReviews(next)
  }

  const save = async () => {
    setStatus('Saving...')
    try {
      const res = await fetch('/api/save-reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reviews)
      })
      const json = await res.json()
      if (res.ok) setStatus('Saved — ' + (json.message || 'done'))
      else setStatus('Error: ' + (json.error || res.statusText))
    } catch (err) {
      setStatus('Error: ' + err.message)
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl font-bold mb-4">Admin — Movie Reviews</h1>

      <div className="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
        <input className="border p-2" placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
        <input className="border p-2" placeholder="Date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
        <input className="border p-2" placeholder="URL" value={form.url} onChange={e => setForm({ ...form, url: e.target.value })} />
        <textarea className="border p-2 col-span-1 sm:col-span-3" placeholder="Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
        <div className="col-span-1 sm:col-span-3 flex gap-2">
          <button onClick={addReview} className="px-4 py-2 bg-gray-200 rounded">Add to list</button>
          <button onClick={save} className="px-4 py-2 bg-[#b80a2c] text-white rounded">Save to repo</button>
          <div className="ml-auto text-sm text-gray-600">{status}</div>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-2">Current list</h2>
      <div className="space-y-3">
        {reviews.map((r, i) => (
          <div key={i} className="p-3 border rounded flex items-start gap-3">
            <div className="flex-1">
              <div className="font-semibold">{r.title}</div>
              <div className="text-sm text-gray-500">{r.date}</div>
              <div className="text-sm mt-1">{r.description}</div>
              <div className="text-sm text-blue-600 mt-1">{r.url}</div>
            </div>
            <div>
              <button onClick={() => removeReview(i)} className="px-3 py-1 bg-red-100 text-red-700 rounded">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
