import Link from "next/link"

import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/examples/dashboard"
        className="text-xs font-semibold text-zinc-500 transition-colors hover:text-primary"
      >
        Home
      </Link>
      <Link
        href="/examples/dashboard"
        className="text-xs font-semibold text-zinc-500 text-muted-foreground transition-colors hover:text-primary"
      >
        About me
      </Link>
      <Link
        href="/examples/dashboard"
        className="text-xs font-semibold text-zinc-500 text-muted-foreground transition-colors hover:text-primary"
      >
        Blog
      </Link>
    </nav>
  )
}