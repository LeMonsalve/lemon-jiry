import { createMiddleware } from 'hono/factory'
import {
  Account,
  type Account as AccountType,
  Client,
  Databases,
  type Databases as DatabasesType,
  Models,
  Storage,
  type Storage as StorageType,
  type Users as UsersType,
} from 'node-appwrite'
import { AUTH_COOKIE } from '@/features/auth/constants'
import { getCookie } from 'hono/cookie'

type AdditionalContext = {
  Variables: {
    account: AccountType
    databases: DatabasesType
    storage: StorageType
    users: UsersType
    user: Models.User<Models.Preferences>
  }
}

export const sessionMiddleware = createMiddleware<AdditionalContext>(
  async (c, next) => {
    const client = new Client()
      .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
      .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!)

    const session = getCookie(c, AUTH_COOKIE)

    if (!session) {
      return c.json({ error: 'Unauthorized' }, 401)
    }

    client.setSession(session)

    const account = new Account(client)
    const databases = new Databases(client)
    const storage = new Storage(client)
    const user = await account.get()

    c.set('account', account)
    c.set('databases', databases)
    c.set('storage', storage)
    c.set('user', user)

    await next()
  },
)