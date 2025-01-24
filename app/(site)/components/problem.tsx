import { Brain, Zap, Shield } from "lucide-react"

const Problem = () => {
  const problemList = [
    {
      icon: Brain,
      title: "Data Overload",
      desc: "Businesses struggle to make sense of vast amounts of complex data, missing out on valuable insightsthat could drive growth and innovation."
    },
    {
      icon: Zap,
      title: "Slow Decision-Making",
      desc: "Traditional data processing methods are too slow, causing businesses to lag behind market changes and miss crucial opportunities."
    },
    {
      icon: Shield,
      title: "Data Security Concerns",
      desc: "With increasing cyber threats, businesses worry about the safety of their sensitive information when adopting new technologies."
    }
  ]

  return (
    <section id="problem">
      <div>
        <div className="container relative mx-auto max-w-7xl px-4 py-16">
          <div className="mx-auto space-y-4 pb-6 text-center">
            <h2 className="font-mono text-sm font-medium uppercase tracking-wider text-primary">Problem</h2>
            <h3 className="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl">
              Manually entering your data is a hassle.
            </h3>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {problemList.map(({ icon: Icon, title, desc }) => (
              <div className="rounded-lg border border-none bg-background text-card-foreground shadow-none" key={title}>
                <div className="space-y-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Problem
