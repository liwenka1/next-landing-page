import Link from "next/link"
import { Atom } from "lucide-react"
import { NavMenu } from "./components/nav-menu"

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/60 py-2 backdrop-blur">
      <div className="container flex items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Atom className="size-10" />
          <span className="text-xl font-bold">vven.ai</span>
        </Link>
        <NavMenu />
      </div>
    </header>
  )
}

export default Header
