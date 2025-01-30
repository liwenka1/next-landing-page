import { Brain } from "lucide-react"
import Image from "next/image"

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"

const Solution = () => {
  const features = [
    {
      Icon: Brain,
      name: "Save your files",
      description: "We automatically save your files as you type.",
      href: "/",
      cta: "Learn more",
      background: (
        <Image
          className="absolute -right-20 -top-20 opacity-60"
          src="/dashboard.png"
          alt="image"
          width="1200"
          height="700"
        />
      ),
      className: "lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-2"
    },
    {
      Icon: Brain,
      name: "Full text search",
      description: "Search through all your files in one place.",
      href: "/",
      cta: "Learn more",
      background: (
        <Image
          className="absolute -right-20 -top-20 opacity-60"
          src="/dashboard.png"
          alt="image"
          width="1200"
          height="700"
        />
      ),
      className: "lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-3"
    },
    {
      Icon: Brain,
      name: "Multilingual",
      description: "Supports 100+ languages and counting.",
      href: "/",
      cta: "Learn more",
      background: (
        <Image
          className="absolute -right-20 -top-20 opacity-60"
          src="/dashboard.png"
          alt="image"
          width="1200"
          height="700"
        />
      ),
      className: "lg:row-start-2 lg:row-end-3 lg:col-start-1 lg:col-end-3"
    },
    {
      Icon: Brain,
      name: "Calendar",
      description: "Use the calendar to filter your files by date.",
      href: "/",
      cta: "Learn more",
      background: (
        <Image
          className="absolute -right-20 -top-20 opacity-60"
          src="/dashboard.png"
          alt="image"
          width="1200"
          height="700"
        />
      ),
      className: "lg:row-start-1 lg:row-end-3 lg:col-start-3 lg:col-end-3"
    }
  ]

  return (
    <section id="solution">
      <div className="bg-neutral-100 dark:bg-neutral-900">
        <div className="container relative mx-auto max-w-7xl px-4 py-16">
          <div className="mx-auto space-y-4 pb-6 text-center">
            <h2 className="font-mono text-sm font-medium uppercase tracking-wider text-primary">Solution</h2>
            <h3 className="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl">
              Empower Your Business with AI Workflows
            </h3>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Generic AI tools won&apos;t suffice. Our platform is purpose-built to provide exceptional AI-driven
              solutions for your unique business needs.
            </p>
          </div>
          <BentoGrid className="lg:grid-rows-2">
            {features.map((feature) => (
              <BentoCard key={feature.name} {...feature} />
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  )
}

export default Solution
