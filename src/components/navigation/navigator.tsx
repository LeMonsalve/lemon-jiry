'use client'

import {
  GoCheckCircle,
  GoCheckCircleFill,
  GoHome,
  GoHomeFill,
} from 'react-icons/go'
import { SettingsIcon, UsersIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IconType } from 'react-icons'
import { cn } from '@/lib/utils'

const routes = [
  {
    label: 'Home',
    href: '/',
    icon: GoHome,
    activeIcon: GoHomeFill,
  },
  {
    label: 'My Tasks',
    href: '/tasks',
    icon: GoCheckCircle,
    activeIcon: GoCheckCircleFill,
  },
  {
    label: 'Settings',
    href: '/settings',
    icon: SettingsIcon,
    activeIcon: SettingsIcon,
  },
  {
    label: 'Members',
    href: '/members',
    icon: UsersIcon,
    activeIcon: UsersIcon,
  },
]

export function Navigator() {
  return (
    <ul className="flex flex-col">
      {routes.map((route) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        return <NavigationItem key={route.href} {...route} />
      })}
    </ul>
  )
}

type NavigationItemProps = {
  label: string
  href: string
  icon: IconType
  activeIcon: IconType
}

function NavigationItem({
  label,
  href,
  icon,
  activeIcon,
}: NavigationItemProps) {
  const pathname = usePathname()
  const isActive = pathname === href
  const Icon = isActive ? activeIcon : icon
  return (
    <Link key={label} href={href}>
      <div
        className={cn(
          'flex items-center gap-2.5 p-2.5 rounded-md font-medium hover:text-primary transition text-neutral-500',
          isActive && 'bg-white shadow-sm hover:opacity-100 text-primary',
        )}
      >
        <Icon className="size-6 text-neutral-500" />
        {label}
      </div>
    </Link>
  )
}
