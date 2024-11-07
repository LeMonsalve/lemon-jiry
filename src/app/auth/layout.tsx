import type { Metadata } from 'next'
import { ReactNode } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'LeMon Jiry - Auth',
}

export type Props = {
  children: ReactNode
}

export default function AuthLayout({ children }: Readonly<Props>) {
  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center">
          <Image src={'/logo.svg'} alt={'LeMon Jiry'} width={152} height={56} />
          <Button variant="secondary">Sign Up</Button>
        </nav>
        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
          {children}
        </div>
      </div>
    </main>
  )
}
