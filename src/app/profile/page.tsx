'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import ProfileCard from '@/app/components/ProfileCard'

export default function ProfilePage() {
  const router = useRouter()

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated')
    if (!isAuthenticated) {
      router.push('/login')
    }
  }, [router])

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">Profilim</h1>
        </div>
        <ProfileCard />
      </div>
    </div>
  )
}