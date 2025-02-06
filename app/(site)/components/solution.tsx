import Image from "next/image"

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"

const Solution = () => {
  const features = [
    {
      title: "Advanced AI Algorithms",
      description:
        "Our platform utilizes cutting-edge AI algorithms to provide accurate and efficient solutions for your business needs.",
      background: <Image className="my-20" src="/dashboard.png" alt="image" width="1200" height="800" />,
      className: "lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-2"
    },
    {
      title: "Secure Data Handling",
      description:
        "We prioritize your data security with state-of-the-art encryption and strict privacy protocols, ensuring your information remains confidential.",
      background: <Image className="my-20" src="/dashboard.png" alt="image" width="1200" height="800" />,
      className: "lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-3"
    },
    {
      title: "Customizable Solutions",
      description:
        "Tailor our AI services to your specific needs with flexible customization options, allowing you to get the most out of our platform.",
      background: <Image className="my-20 max-w-[400px]" src="/dashboard.png" alt="image" width="1200" height="800" />,
      className: "lg:row-start-2 lg:row-end-3 lg:col-start-1 lg:col-end-3"
    },
    {
      title: "Seamless Integration",
      description:
        "Easily integrate our AI solutions into your existing workflows and systems for a smooth and efficient operation.",
      background: (
        <Image className="my-20 h-full w-[1200px]" src="/dashboard.png" alt="image" width="1200" height="800" />
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
              <BentoCard key={feature.title} {...feature} />
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  )
}

export default Solution
