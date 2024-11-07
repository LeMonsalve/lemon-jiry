import { ReactNode } from 'react'
import { redirect } from 'next/navigation'
import { getCurrent } from '@/features/auth/queries'
import { Navbar, Sidebar } from '@/components/navigation'

export type Props = {
  children: ReactNode
}

export default async function DashboardLayout({ children }: Readonly<Props>) {
  const current = await getCurrent()
  if (!current) redirect('/auth/sign-in')

  return (
    <div className="min-h-screen">
      <div className="flex w-full h-full">
        <div className="fixed left-0 top-0 hidden lg:block lg:w-[264px] h-full overflow-y-auto">
          <Sidebar />
        </div>
        <div className="lg:pl-[264px] w-full">
          <div className="mx-auto max-w-screen-2xl h-full">
            <Navbar />
            <main className="h-full py-8 px-6 flex flex-col">{children}</main>
          </div>
        </div>
      </div>
    </div>
  )
}
