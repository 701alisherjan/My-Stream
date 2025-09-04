import { RootLayoutProps } from '@/types'
import React from 'react'


function AuthLayout({children}:RootLayoutProps ) {
  return (
    <div className='w-full h-full flex items-center justify-center mt-5'>
        {children}
    </div>
  )
}

export default AuthLayout