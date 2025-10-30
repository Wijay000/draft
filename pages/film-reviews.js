import { useEffect } from 'react'
import { useRouter } from 'next/router'

// Placeholder route for Film Reviews — redirect to homepage for now.
export default function FilmReviews() {
  const router = useRouter()
  useEffect(() => {
    router.replace('/')
  }, [router])
  return null
}
