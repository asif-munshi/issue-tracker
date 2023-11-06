'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AiFillBug } from 'react-icons/ai'

export default function Header() {
  const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'Issues', href: '/issues' },
  ]

  const pathname = usePathname()

  return (
    <header className="mb-5 flex h-14 items-center gap-6 border-b text-black">
      <Link
        href="/"
        className="flex h-full items-center px-4 transition-colors hover:text-blue-600"
      >
        <AiFillBug size={24} />
      </Link>
      <ul className="flex h-full items-center">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={`${
              link.href === pathname
                ? 'bg-zinc-100 text-zinc-800 hover:bg-zinc-100'
                : ''
            } flex h-full items-center px-2 text-zinc-500 transition-colors hover:bg-zinc-50 hover:text-zinc-800`}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </header>
  )
}
