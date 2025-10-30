import { useEffect } from 'react'
import { useRouter } from 'next/router'

// Admin page for Movie Reviews has been removed. Redirect to the homepage.
export default function Admin() {
  const router = useRouter()
  useEffect(() => {
    router.replace('/')
  }, [router])
  return null
}
