import { Button } from '@radix-ui/themes'
import Link from 'next/link'

export default function IssuesPage() {
  return (
    <div className="text-black">
      <div>IssuesPage</div>
      <Button className="px-0">
        <Link
          href="/issues/new"
          className="flex h-full w-full items-center px-3"
        >
          New Issue
        </Link>
      </Button>
    </div>
  )
}
