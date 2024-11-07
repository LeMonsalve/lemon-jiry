import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { authApp } from '@/features/auth/server/route'
import { workspacesApp } from '@/features/workspaces/server/route'

const app = new Hono().basePath('/api')

const routes = app.route('/auth', authApp).route('/workspaces', workspacesApp)

export const GET = handle(app)
export const POST = handle(app)

export type AppType = typeof routes
