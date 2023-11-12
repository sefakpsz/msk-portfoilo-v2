import { cn } from "@/lib/utils"
import { Github, LinkedinIcon, TwitterIcon, Instagram } from "lucide-react"

function Social() {
  // FIXME: use next/link instead of a

  return (
    <div className="ml-auto flex items-center space-x-4">
      <a
        href="https://github.com/sefakpsz"
        className="text-zinc-500 transition-colors hover:text-primary"
        target="_blank"
      >
        <Github height={20} />
      </a>
      <a
        href="https://linkedin.com/in/sefakpsz"
        className="text-zinc-500 transition-colors hover:text-primary"
        target="_blank"
      >
        <LinkedinIcon height={20} />
      </a>
      <a
        href="https://twitter.com/sefakpsz"
        className="text-zinc-500 transition-colors hover:text-primary"
        target="_blank"
      >
        <TwitterIcon height={20} />
      </a>
      <a
        href="https://instagram.com/sefakpsz"
        className="text-zinc-500 transition-colors hover:text-primary"
        target="_blank"
      >
        <Instagram height={20} />
      </a>
    </div>
  )
}

export default Social
