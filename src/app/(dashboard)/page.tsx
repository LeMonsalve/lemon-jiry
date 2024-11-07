import { getCurrent } from '@/features/auth/queries'
import { redirect } from 'next/navigation'
import { CreateWorkspaceForm } from '@/features/workspaces/components'

export default async function Home() {
  const current = await getCurrent()
  if (!current) redirect('/auth/sign-in')

  return (
    <div className="flex gap-4">
      <CreateWorkspaceForm />
    </div>
  )
}
