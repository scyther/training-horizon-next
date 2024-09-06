import PreviewPage from '@/components/UserFlow/Preview'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <Suspense>
    <PreviewPage />
    </Suspense>
  )
}

export default page