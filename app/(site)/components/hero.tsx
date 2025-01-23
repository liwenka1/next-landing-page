import Link from "next/link"
import { ArrowRight, Atom } from "lucide-react"

import { Button } from "@/components/ui/button"
import HeroVideoDialog from "@/components/ui/hero-video-dialog"

const Hero = () => {
  return (
    <section id="hero">
      <div className="relative flex w-full flex-col items-center justify-start px-4 pt-32 sm:px-6 sm:pt-24 md:pt-32 lg:px-8">
        <Link
          href="/"
          className="flex w-auto items-center space-x-2 whitespace-pre rounded-full bg-primary/20 px-2 py-1 ring-1 ring-accent"
        >
          <div className="w-fit rounded-full bg-accent px-2 py-0.5 text-center text-xs font-medium text-primary sm:text-sm">
            📣 Announcement
          </div>
          <p className="text-xs font-medium text-primary sm:text-sm">Introducing VVen.ai</p>
          <ArrowRight className="size-4 text-primary" />
        </Link>
        <div className="flex w-full max-w-2xl flex-col space-y-4 overflow-hidden pt-8">
          <h1 className="text-center text-4xl font-medium leading-tight text-foreground sm:text-5xl md:text-6xl">
            Automate your workflow with AI
          </h1>
          <p className="mx-auto max-w-xl text-balance text-center text-lg leading-7 text-muted-foreground sm:text-xl sm:leading-9">
            No matter what problem you have, our AI can help you solve it.
          </p>
        </div>
        <Button className="mt-6">
          <Atom className="size-6" />
          Get Started for Free
        </Button>
        <p className="mt-5 text-sm text-muted-foreground">7 day free trial. No credit card required.</p>
        <div className="relative mx-auto mt-16 flex w-full max-w-screen-lg items-center justify-center rounded-lg border shadow-lg">
          <HeroVideoDialog
            className="block dark:hidden"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
            thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
            thumbnailAlt="Hero Video"
          />
          <HeroVideoDialog
            className="hidden dark:block"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
            thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
            thumbnailAlt="Hero Video"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
