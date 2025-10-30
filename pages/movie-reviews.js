import { useEffect } from 'react'
import { useRouter } from 'next/router'

// Movie Reviews removed — redirect to homepage
export default function MovieReviews() {
  const router = useRouter()
  useEffect(() => {
    router.replace('/')
  }, [router])
  return null
}
