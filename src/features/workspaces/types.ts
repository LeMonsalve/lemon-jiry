import { z } from 'zod'
import { createWorkspaceSchema } from '@/features/workspaces/schemas'

export type CreateWorkspaceSchema = z.infer<typeof createWorkspaceSchema>
