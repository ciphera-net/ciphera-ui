'use client'

import { Toaster as SonnerToaster } from 'sonner'

export function Toaster() {
  return (
    <SonnerToaster 
      position="top-right"
      toastOptions={{
        className: 'bg-transparent shadow-none border-none p-0 w-full',
        style: { background: 'transparent', border: 'none', boxShadow: 'none' }
      }}
    />
  )
}
